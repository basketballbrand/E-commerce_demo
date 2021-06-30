<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <h3>Logo</h3>
      <div
        class="
          collapse
          navbar-collapse
          d-flex
          justify-content-between
          align-items-center
          ms-5
        "
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/demo/prodlist">商品</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">後台管理</router-link>
          </li>
        </ul>
        <ul class="navbar-nav function_bar">
          <li class="nav-item">
            <router-link class="nav-link" to="/demo/checkout"
              ><i class="bi bi-bag"></i
              ><span class="cart_qty" v-if="listtotal !== 0">{{
                listtotal
              }}</span></router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      cartlist: [],
    };
  },
  inject: ["emitter"],
  computed: {
    listtotal() {
      return this.cartlist.length;
    },
  },
  created() {
    this.emitter.on("sendcartlist", (data) => {
      this.cartlist = data.carts;
    });
  },
};
</script>
<style lang="scss" scoped>
nav {
  border-bottom: 1px solid #ccc;
}
.bi-bag {
  font-size: 20px;
}
.function_bar {
  li {
    position: relative;
    .cart_qty {
      padding: 1px 2px;
      color: #fff;
      min-width: 16px;
      height: 16px;
      text-align: center;
      border-radius: 16px;
      position: absolute;
      top: 0;
      left: 25px;
      overflow: hidden;
      background: #f23e0c;
      line-height: 1;
      font-size: 14px;
    }
  }
}
</style>
