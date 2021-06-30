<template>
  <navbar></navbar>
  <div class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view></router-view>
  </div>
</template>
<script>
import emitter from "@/methods/emitter.js";
import ToastMessages from "@/components/ToastMessages.vue";
import navbar from "../components/Navbar.vue";
export default {
  components: {
    navbar,
    ToastMessages,
  },
  provide() {
    return {
      emitter,
    };
  },
  created() {
    //取出cookie
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    //axios存入取出的cookie
    this.$http.defaults.headers.common.Authorization = `${token}`;
    //取出的cookiex來使用api檢查用戶是否仍持續登入
    const api = `${process.env.VUE_APP_API}/api/user/check`;
    this.$http.post(api, this.user).then((res) => {
      //   console.log(res);
      if (!res.data.success) {
        this.$router.push("/login");
      }
    });
  },
};
</script>
