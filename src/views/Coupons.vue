<template>
  <loading :active="isLoading"></loading>
  <div class="text-end">
    <button class="btn btn-primary" type="button" @click="openModal(true)">
      建立新的優惠卷
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>名稱</th>
        <th>優惠碼</th>
        <th>折扣百分比</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in coupons" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.code }}</td>
        <td class="text-right">{{item.percent}} %</td>
        <td class="text-right">{{ new Date(item.due_date * 1000).toISOString().split('T')[0]}}</td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-mute" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              class="btn btn-outline-primary btn-sm"
              @click="openModal(false, item)"
            >
              編輯
            </button>
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
  <Pagination :pages="pagination" @emit-page="getCoupons"></Pagination>
  <CouponsModal 
    ref="couponsModal"
    :coupon="tempcoupons"
    @update-coupon="updateCoupon"
  ></CouponsModal>
  <DelModal
    ref="delmodal"
    :item="tempcoupons"
    @del-item="delCoupon"
  ></DelModal>
</template>
<script>
import CouponsModal from "@/components/CouponsModal.vue";
import DelModal from "@/components/DelModal.vue";
import Pagination from "@/components/Pagination.vue";
export default {
  data() {
    return {
      coupons: [],
      pagination: {},
      tempcoupons: {},
      isNew: false,
      isLoading: false,
    };
  },
  components: {
    CouponsModal ,
    DelModal,
    Pagination,
  },
  inject: ["emitter"],
  methods: {
    getCoupons(page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        this.coupons = res.data.coupons;
        this.pagination = res.data.pagination;
        // console.log(this.coupons);
      });
    },
    openModal(isNew, item) {
      // console.log(isNew, item);
      if (isNew) {
        this.tempcoupons = {};
      } else {
        this.tempcoupons = { ...item };
      }
      this.isNew = isNew;
      const CouponsModal = this.$refs.couponsModal;
      CouponsModal.showModal();
    },
    openDelModal(item) {
      // console.log(item);
      this.tempcoupons = { ...item };
      const DelModal = this.$refs.delmodal;
      DelModal.showModal();
    },
    delCoupon() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempcoupons.id}`;
      this.$http.delete(api).then((res) => {
        console.log(res.data);
        const DelModal = this.$refs.delmodal;
        DelModal.hideModal();
        this.getCoupons();
      });
    },
    updateCoupon(item) {
    //   console.log(item);
      item.due_date = Math.floor(new Date(item.due_date) / 1000)
      this.tempcoupons = item;
      //新增
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon`;
      let httpMethod = "post";
      //編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`;
        httpMethod = "put";
      }
      const CouponsModal = this.$refs.couponsModal;
      this.$http[httpMethod](api, { data: this.tempcoupons }).then((res) => {
        // console.log(res.data);
        CouponsModal.hideModal();
        this.getCoupons();
        //錯誤訊息的回饋
        if (res.data.success) {
          this.getCoupons();
          this.emitter.emit("push-message", {
            style: "success",
            title: "更新成功",
          });
        } else {
          this.emitter.emit("push-message", {
            style: "danger",
            title: "更新失敗",
            content: res.data.message.join("、"),
          });
        }
      });
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>

