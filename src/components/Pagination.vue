<template>
  <nav aria-label="Page navigation example ">
    <ul class="pagination justify-content-center mt-5">
      <li class="page-item" :class="{ disabled: !pages.has_pre }">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="uppagedata(pages.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        v-for="page in pages.total_pages"
        :key="page"
        :class="{ active: page === pages.current_page }"
      >
        <a class="page-link" href="#" @click.prevent="uppagedata(page)">{{
          page
        }}</a>
      </li>
      <li class="page-item" :class="{ disabled: !pages.has_next }">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="uppagedata(pages.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: ["pages"],
  methods: {
    uppagedata(page) {
      this.$emit("emit-page", page);
    },
  },
};
</script>
<style lang="scss" scoped>
.page-item.active {
  .page-link {
    color: #333;
    background: #eee;
    border-color: #ccc;
  }
}
</style>
