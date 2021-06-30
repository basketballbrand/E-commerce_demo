<template>
  <navbar></navbar>
  <div class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view></router-view>
  </div>
</template>
<script>
import navbar from "@/components/Demonavbar.vue";
import emitter from "@/methods/emitter.js";
import ToastMessages from "@/components/ToastMessages.vue";
export default {
  components: {
    ToastMessages,
    navbar,
  },
  provide() {
    return {
      emitter,
    };
  },
};
</script>
