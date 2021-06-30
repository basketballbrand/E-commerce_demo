<template>
  <loading :active="isLoading"></loading>
  <div class="text-end">
    <button class="btn btn-danger" type="button" @click="openDelModal">
      全部刪除
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>購買日期</th>
        <th>購買人資訊</th>
        <th>購買款項</th>
        <th>配送方式</th>
        <th>應附金額</th>
        <th>付款狀態</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in orderlist" :key="item.id">
        <td>
          {{ new Date(item.create_at * 1000).toISOString().split("T")[0] }}
        </td>
        <td>
          <ul>
            <li>姓名：{{ item.user.name }}</li>
            <li>電話：{{ item.user.tel }}</li>
            <li>E-mail：{{ item.user.email }}</li>
            <li>地址：{{ item.user.address }}</li>
          </ul>
        </td>
        <td>
          <template v-for="prod in item.products" :key="prod.id">
            <ul class="d-flex justify-content-between prod_info">
              <li>{{ prod.product.title }}</li>
              <li>{{ prod.qty }} / {{ prod.product.unit }}</li>
            </ul>
          </template>
        </td>
        <td>{{ item.user.deliveryway }}</td>
        <td>{{ item.total }}</td>
        <td>
          <ul>
            <li>
              <p v-if="item.is_paid" class="text-success">已付款</p>
              <p v-else class="text-danger">未付款</p>
            </li>
            <li>付款方式：{{ item.user.payment_method }}</li>
          </ul>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm">編輯</button>
            <button
              class="btn btn-outline-danger btn-sm"
              @click="openDelModal(item)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <Pagination :pages="pagination" @emit-page="getorderlist"></Pagination>
  <DelModal ref="delmodal" :item="temporder" @del-item="delorder"></DelModal>
</template>
<script>
import DelModal from "@/components/DelModal.vue";
import Pagination from "@/components/Pagination.vue";
export default {
  data() {
    return {
      orderlist: [],
      temporder: {},
      pagination: {},
      isLoading: false,
    };
  },
  components: {
    DelModal,
    Pagination,
  },
  methods: {
    getorderlist(page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/orders?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        this.orderlist = res.data.orders;
        this.pagination = res.data.pagination;
        console.log(res);
      });
    },
    openDelModal(item) {
      // console.log(item);
      this.temporder = { ...item };
      const DelModal = this.$refs.delmodal;
      DelModal.showModal();
    },
    delorder() {
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders/all`;
      if (this.temporder.id) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${this.temporder.id}`;
      }
      this.$http.delete(api).then((res) => {
        console.log(res.data);
        const DelModal = this.$refs.delmodal;
        DelModal.hideModal();
        this.getorderlist();
      });
    },
  },
  created() {
    this.getorderlist();
  },
};
</script>
<style lang="scss" scoped>
.prod_info {
  width: 200px;
}
</style>
