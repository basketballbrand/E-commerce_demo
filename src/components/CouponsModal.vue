<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <!-- 請同學自行新增 v-model -->
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>新增優惠卷</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">優惠卷標題</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="請輸入標題"
                  v-model="tempCoupons.title"
                />
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">折扣百分比</label>
                  <input
                    type="number"
                    class="form-control"
                    id="category"
                    placeholder="折扣百分比"
                    v-model.number="tempCoupons.percent"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">到期日期</label>
                  <input
                    type="date"
                    class="form-control"
                    id="unit"
                    placeholder="到期日期"
                    v-model="tempCoupons.due_date"
                  />
                </div>
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">優惠碼</label>
                  <input
                    type="text"
                    class="form-control"
                    id="origin_price"
                    placeholder="請輸入優惠碼"
                    v-model.number="tempCoupons.code"
                  />
                </div>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    id="is_enabled"
                    v-model="tempCoupons.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled">
                    是否啟用
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="$emit('update-coupon', tempCoupons)"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import modalMixin from "@/mixins/ModalMixin";
export default {
  props: {
    coupon: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    coupon() {
      this.tempCoupons = this.coupon;
    },
  },
  data() {
    return {
      modal: {},
      tempCoupons: {
      },
    };
  },
  mixins: [modalMixin],
};
</script>
