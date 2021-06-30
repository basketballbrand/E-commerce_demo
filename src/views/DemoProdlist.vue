<template>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <div class="row my-4">
      <!-- 商品列表 -->
      <div class="col-md-3">
        <div class="list-group">
          <a
            href="#"
            class="list-group-item list-group-item-action"
            aria-current="true"
            @click.prevent="prodcategory.length = 0"
            :class="{
              active: !prodcategory.length > 0,
            }"
          >
            全部商品
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action"
            aria-current="true"
            @click.prevent="getcategory('蔬菜')"
            :class="{
              active: prodcategory
                .map((item) => item.category)
                .includes('蔬菜'),
            }"
          >
            蔬菜
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action"
            aria-current="true"
            @click.prevent="getcategory('水果')"
            :class="{
              active: prodcategory
                .map((item) => item.category)
                .includes('水果'),
            }"
          >
            水果
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action"
            aria-current="true"
            @click.prevent="getcategory('海鮮')"
            :class="{
              active: prodcategory
                .map((item) => item.category)
                .includes('海鮮'),
            }"
          >
            海鮮
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action"
            aria-current="true"
            @click.prevent="getcategory('肉品')"
            :class="{
              active: prodcategory
                .map((item) => item.category)
                .includes('肉品'),
            }"
          >
            肉品
          </a>
        </div>
      </div>
      <div class="col-md-9">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col" v-for="item in productslist" :key="item.id">
            <div class="card">
              <div class="prod_img" @click.prevent="getProduct(item.id)">
                <img :src="item.imageUrl" class="card-img-top" />
              </div>
              <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">1 / {{ item.unit }}</p>
                <p class="card-text">$ {{ item.price }}</p>
                <a
                  href="#"
                  class="ui_btn mt-2"
                  stretched-link
                  @click.stop.prevent="addToCart(item.id)"
                  >加入購物車</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <Pagination :pages="pagination" @emit-page="getproducts"></Pagination> -->
    </div>
  </div>
</template>
<script>
// import Pagination from "@/components/Pagination.vue";
export default {
  data() {
    return {
      products: [],
      pagination: {},
      prodcategory: [],
      isLoading: false,
      status: {
        loadingItem: "",
      },
    };
  },
  components: {
    // Pagination,
  },
  computed: {
    productslist() {
      return this.prodcategory.length !== 0 ? this.prodcategory : this.products;
    },
  },
  inject: ["emitter"],
  methods: {
    getallproducts(){
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        this.products = res.data.products;
        // console.log(this.products);
      });
    },
    // getproducts(page = 1) {
    //   const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`;
    //   this.isLoading = true;
    //   this.$http.get(api).then((res) => {
    //     this.isLoading = false;
    //     this.products = res.data.products;
    //     this.pagination = res.data.pagination;
    //   });
    // },
    // 分類
    getcategory(category) {
      this.prodcategory = this.products.filter((item) => {
        return item.category == category;
      });
    },
    //商品資訊
    getProduct(id) {
      this.$router.push(`product/${id}`);
    },
    //加入購物車
    addToCart(id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.isLoading = true;
      this.$http.post(api, { data: cart }).then((res) => {
        this.isLoading = false;
        console.log(res);
        if (res.data.success) {
          this.getcartlist();
        }
      });
    },
    //購物車列表
    getcartlist() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        this.emitter.emit("sendcartlist", res.data.data);
      });
    },
  },
  created() {
    this.getallproducts();
    this.getcartlist();
  },
};
</script>
<style lang="scss" scoped>
.list-group-item {
  border: none;
  border-radius: 0;
}
.list-group-item.active {
  color: #333;
  background: #eee;
}
.ui_btn:hover {
  color: rgba(255, 255, 255, 0.6);
  background: rgba(51, 51, 51, 0.6);
}
</style>
