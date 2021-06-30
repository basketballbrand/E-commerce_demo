<template>
  <loading :active="isLoading"></loading>
  <div class="text-end">
    <button class="btn btn-primary" type="button" @click="openModal(true)">
      增加一個產品
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">{{ $filters.currency(item.origin_price) }}</td>
        <td class="text-right">{{ $filters.currency(item.price) }}</td>
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
  <Pagination :pages="pagination" @emit-page="getProducts"></Pagination>
  <ProductModal
    ref="productmodal"
    :product="tempProducts"
    @update-product="updateProduct"
  ></ProductModal>
  <DelModal
    ref="delmodal"
    :item="tempProducts"
    @del-item="delProduct"
  ></DelModal>
</template>
<script>
import ProductModal from "@/components/ProductModal.vue";
import DelModal from "@/components/DelModal.vue";
import Pagination from "@/components/Pagination.vue";
export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProducts: {},
      isNew: false,
      isLoading: false,
    };
  },
  components: {
    ProductModal,
    DelModal,
    Pagination,
  },
  inject: ["emitter"],
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        // console.log(res.data);
        this.products = res.data.products;
        this.pagination = res.data.pagination;
      });
    },
    openModal(isNew, item) {
      // console.log(isNew, item);
      if (isNew) {
        this.tempProducts = {};
      } else {
        this.tempProducts = { ...item };
      }
      this.isNew = isNew;
      const ProdModal = this.$refs.productmodal;
      ProdModal.showModal();
    },
    openDelModal(item) {
      // console.log(item);
      this.tempProducts = { ...item };
      const DelModal = this.$refs.delmodal;
      DelModal.showModal();
    },
    delProduct() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProducts.id}`;
      this.$http.delete(api).then((res) => {
        console.log(res.data);
        const DelModal = this.$refs.delmodal;
        DelModal.hideModal();
        this.getProducts();
      });
    },
    updateProduct(item) {
      // console.log(item);
      this.tempProducts = item;
      //新增
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = "post";
      //編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = "put";
      }
      const ProdModal = this.$refs.productmodal;
      this.$http[httpMethod](api, { data: this.tempProducts }).then((res) => {
        console.log(res.data);
        ProdModal.hideModal();
        this.getProducts();
        //錯誤訊息的回饋
        if (res.data.success) {
          this.getProducts();
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
    this.getProducts();
  },
};
</script>
