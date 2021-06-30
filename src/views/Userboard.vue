<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">前端範例</a>
    </div>
  </nav>
  <div class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view></router-view>
  </div>
</template>
<script>
import emitter from "@/methods/emitter.js";
import ToastMessages from "@/components/ToastMessages.vue";
export default {
  components: {
    ToastMessages,
  },
  provide() {
    return {
      emitter,
    };
  },
};
</script>
