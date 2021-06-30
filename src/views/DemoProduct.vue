<template>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/demo/prodlist">商品</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ product.title }}
        </li>
      </ol>
    </nav>
    <div class="row justify-content-center my-5">
      <article class="col-7">
        <div class="product_img">
          <img :src="product.imageUrl" alt="" class="" />
        </div>
      </article>
      <div class="col-5">
        <h2>{{ product.title }}</h2>
        <div>{{ product.content }}</div>
        <div class="my-4">{{ product.description }}</div>
        <div class="h5" v-if="!product.price">
          {{ product.origin_price }} 元
        </div>
        <del class="h6" v-if="product.price"
          >原價 ${{ product.origin_price }}
        </del>
        <div class="h5 price" v-if="product.price">${{ product.price }}</div>
        <hr />
        <div class="d-flex justify-content-between">
          <select v-model.number="productqty">
            <option disabled value="">請選擇</option>
            <option :value="qty" v-for="qty in 10" :key="qty">
              數量：{{ qty }}
            </option>
          </select>
          <button
            type="button"
            class="ui_btn"
            :disabled="productqty == ''"
            @click.prevent="addToCart(product.id)"
          >
            加到購物車
          </button>
        </div>
      </div>
    </div>
    <hr />
    <div class="my-5">
      <h4 class="text-center mb-5">其他人正在看</h4>
      <div class="row row-cols-1 row-cols-md-4 g-4 flex-nowrap">
        <div class="col" v-for="item in prodother" :key="item.id">
          <div class="card">
            <div class="prod_img" @click.prevent="getProduct(item.id)">
              <img :src="item.imageUrl" class="card-img-top" />
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">$ {{ item.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [],
      product: {},
      id: "",
      isLoading: false,
      status: {
        loadingItem: "",
      },
      productqty: "",
    };
  },
  inject: ["emitter"],
  computed: {
    prodother() {
      let a = this.products.filter((item) => {
        return item.category == this.product.category;
      });
      return a.sort(() => Math.random() - 0.5).splice(-4);
    },
  },
  methods: {
    getproducts() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        this.products = res.data.products;
        this.pagination = res.data.pagination;
      });
    },
    //商品資訊
    getProduct(id) {
      this.productqty = "";
      this.$router.push(`${id}`);
      this.id = id;
      this.getproduct();
    },
    getproduct() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        this.product = res.data.product;
        // console.log("prod",this.product.category);
      });
    },
    //加入購物車
    addToCart(id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty: this.productqty,
      };
      this.$http.post(api, { data: cart }).then((res) => {
        console.log(res.data);
        this.productqty = "";
        if (res.data.success) {
          this.getcartlist();
          this.emitter.emit("push-message", {
            style: "success",
            title: res.data.message,
          });
        } else {
          this.emitter.emit("push-message", {
            style: "danger",
            title: "加入購物車失敗",
            content: res.data.message.join("、"),
          });
        }
      });
    },
    //購物車列表
    getcartlist() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        // console.log(res.data.data);
        this.emitter.emit("sendcartlist", res.data.data);
      });
    },
  },
  created() {
    this.id = this.$route.params.Id;
    this.getproduct();
    this.getcartlist();
    this.getproducts();
  },
};
</script>
<style lang="scss" scoped>
.breadcrumb-item a {
  color: #333;
}
.product_img {
  max-width: 600px;
  margin: 0 auto;
  object-fit: cover;
  img {
    width: 100%;
  }
}
.ui_btn,
select {
  width: 48%;
}
.price {
  font-size: 40px;
}
</style>
