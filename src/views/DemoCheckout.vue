<template>
  <Loading :active="isLoading"></Loading>
  <div class="container my-5 py-4">
    <ul class="stepper">
      <li class="step_item" :class="{ active: status.isShow }">購物車</li>
      <li
        class="step_item"
        :class="{ active: !status.isShow && orderId == '' }"
      >
        付款及運送
      </li>
      <li class="step_item" :class="{ active: orderId !== '' }">訂單確認</li>
    </ul>

    <!-- 購物車沒有商品 -->
    <div class="cart_empty" v-if="cartlist.total == 0">
      <h5>購物車目前沒有商品</h5>
      <a href="#" class="ui_btn" @click.prevent="$router.push('/demo/prodlist')"
        >前往購物</a
      >
    </div>
    <!-- 購物車清單 -->
    <div
      class="my-5 justify-content-center row"
      v-if="status.isShow && cartlist.total !== 0"
    >
      <div class="my-5 col-9">
        <table class="table align-middle">
          <thead>
            <tr>
              <th>商品資訊</th>
              <th>價格</th>
              <th>數量</th>
              <th>小計</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartlist.carts" :key="item.id">
              <td>
                <ul class="d-flex align-items-center">
                  <li class="me-3">
                    <img :src="item.product.imageUrl" alt="" />
                  </li>
                  <li>
                    {{ item.product.title }}
                  </li>
                </ul>
              </td>
              <td>$ {{ $filters.currency(item.product.price) }}</td>
              <td>
                <div class="input-group input-group-sm">
                  <input
                    type="number"
                    class="form-control"
                    min="1"
                    @change="updateCart(item)"
                    v-model.number="item.qty"
                  />
                  <div class="input-group-text">{{ item.product.unit }}</div>
                </div>
              </td>
              <td>
                <ul>
                  <li
                    :class="{
                      'text-decoration-line-through':
                        cartlist.final_total !== cartlist.total,
                    }"
                  >
                    $ {{ $filters.currency(item.total) }}
                  </li>
                  <li>
                    <div
                      class="text-success"
                      v-if="cartlist.final_total !== cartlist.total"
                    >
                      折扣價：$ {{ item.final_total }}
                    </div>
                  </li>
                </ul>
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-outline-dark btn-sm"
                  @click="deleteitem(item.id)"
                >
                  <i class="bi bi-x-lg"></i>
                </button>
              </td>
            </tr>
          </tbody>
          <!-- <tfoot>
            <tr>
              <td colspan="4" class="text-end">總計</td>
              <td class="text-end">
                $ {{ $filters.currency(cartlist.total) }}
              </td>
            </tr>
            <tr v-if="cartlist.final_total !== cartlist.total">
              <td colspan="3" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">
                {{ $filters.currency(cartlist.final_total) }}
              </td>
            </tr>
          </tfoot> -->
        </table>
        <div class="text-center">
          <button
            type="button"
            class="btn btn-outline-dark btn-sm"
            @click="deleteall"
            :disabled="cartlist.total == 0"
          >
            <i class="bi bi-trash"></i>刪除全部商品
          </button>
        </div>
      </div>
      <div class="ord_info my-5 col-3">
        <h5>訂單資訊</h5>
        <p><i class="bi bi-truck"></i>單筆滿 $2000 享免運。</p>
        <ul>
          <li v-if="cartlist.final_total == cartlist.total">
            <span class="title">小計：</span
            ><span class="price">NT$ {{ cartlist.total }}</span>
          </li>
          <li class="text-success" v-else>
            <span class="title">小計：</span
            ><span class="price">NT$ {{ cartlist.final_total }}</span>
          </li>
          <li>
            <span class="title">運費：</span
            ><span class="price">NT$ {{ Shipping }}</span>
          </li>
          <li v-if="cartlist.final_total >= 2000" class="text-danger">
            <span class="title">單筆滿 $2000 享免運</span><br /><span>
              - NT $ 100</span
            >
          </li>
          <li>
            <div class="input-group mb-3 input-group input-group-sm">
              <input
                type="text"
                class="form-control"
                placeholder="請輸入優惠碼"
                v-model="coupon_code"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                @click="addCouponcode"
              >
                輸入
              </button>
            </div>
            <p class="coupons_code">
              輸入 <span class="text-success">coupons</span> 將享有五折的優惠
            </p>
          </li>
        </ul>
        <hr />
        <ul>
          <li class="d-flex justify-content-between align-items-center">
            <p class="title">總金額</p>
            <div class="price">
              <span v-if="cartlist.total == 0">NT$ 0</span>
              <span v-else>NT$ {{ final_total }}</span>
            </div>
          </li>
          <li class="text-center">
            <button
              type="button"
              class="ui_btn my-3"
              :disabled="cartlist.total == 0"
              @click="status.isShow = !status.isShow"
            >
              前往結帳
            </button>
          </li>
        </ul>
      </div>
    </div>
    <!-- 表單驗證 -->
    <div
      class="my-5 row justify-content-center info_form"
      v-if="!status.isShow && orderId == ''"
    >
      <Form class="col-md-6" v-slot="{ errors }" @submit="createOrder">
        <div class="mb-3">
          <label for="email" class="form-label">付款方式</label>
          <Field
            id="payway"
            name="付款方式"
            class="form-control"
            :class="{ 'is-invalid': errors['付款方式'] }"
            rules="required"
            as="select"
            v-model="form.user.payment_method"
          >
            <option value="">請選擇付款方式</option>
            <option value="信用卡一次付清">信用卡一次付清</option>
            <option value="超商取貨付款">超商取貨付款</option>
            <option value="ATM轉帳">ATM轉帳</option>
            <option value="LINE Pay">LINE Pay</option>
            <option value="Apple Pay">Apple Pay</option>
          </Field>
          <ErrorMessage name="付款方式" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">配送方式</label>
          <Field
            id="deliveryway"
            name="配送方式"
            class="form-control"
            :class="{ 'is-invalid': errors['配送方式'] }"
            rules="required"
            as="select"
            v-model="form.user.deliveryway"
          >
            <option value="">請選擇配送方式</option>
            <option value="宅配">宅配</option>
            <option value="超商取貨">超商取貨</option>
          </Field>
          <ErrorMessage name="配送方式" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <Field
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
            v-model="form.user.email"
          ></Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <Field
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名"
            rules="required"
            v-model="form.user.name"
          ></Field>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <Field
            id="tel"
            name="電話"
            type="tel"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話"
            rules="required"
            v-model="form.user.tel"
          ></Field>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <Field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="form.user.address"
          ></Field>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea
            name=""
            id="message"
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="text-end d-flex justify-content-between">
          <button
            type="button"
            class="ui_btn"
            :disabled="cartlist.final_total == 0"
            @click="status.isShow = !status.isShow"
          >
            上一步
          </button>
          <button class="ui_btn">提交訂單</button>
        </div>
      </Form>
    </div>
    <!-- 訂單資料 -->
    <div
      class="my-5 row justify-content-center order_form"
      v-if="orderId !== ''"
    >
      <form class="col-md-6" @submit.prevent="payOrder">
        <h5 class="text-center mt-5 mb-4">訂單資訊</h5>
        <table class="table align-middle">
          <thead>
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
          </thead>
          <tbody>
            <tr v-for="item in order.products" :key="item.id">
              <td>{{ item.product.title }}</td>
              <td>{{ item.qty }}/{{ item.product.unit }}</td>
              <td>
                <div
                  :class="{
                    'text-decoration-line-through':
                      cartlist.final_total !== cartlist.total,
                  }"
                >
                  $ {{ item.total }}
                </div>
                <div
                  class="text-success"
                  v-if="item.final_total !== item.total"
                >
                  折扣價：$ {{ item.final_total }}
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" class="text-end">小計</td>
              <td class="text-end">{{ cartlist.final_total }}</td>
            </tr>
            <tr>
              <td colspan="2" class="text-end">運費</td>
              <td class="text-end">{{ Shipping }}</td>
            </tr>
            <tr>
              <td colspan="2" class="text-end">總計</td>
              <td class="text-end">{{ final_total }}</td>
            </tr>
          </tfoot>
        </table>
        <h5 class="text-center mt-5 mb-4">收件人資訊</h5>
        <table class="table">
          <tbody>
            <tr>
              <th>付款方式</th>
              <td>{{ order.user.payment_method }}</td>
            </tr>
            <tr>
              <th>配送方式</th>
              <td>{{ order.user.deliveryway }}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th>姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th>收件人電話</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th>收件人地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td>
                <span v-if="!order.is_paid">尚未付款</span>
                <span v-else class="text-success">付款完成</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="mt-3 text-center">
          <button class="ui_btn" v-if="order.is_paid === false">
            確認付款去
          </button>
          <button class="ui_btn" v-else @click="$router.push('/demo/prodlist')">
            回商品頁
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cartlist: [],
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
          payment_method: "",
          deliveryway: "",
        },
        message: "",
      },
      isLoading: false,
      status: {
        isShow: true,
      },
      orderId: "",
      order: {
        user: {},
      },
      coupon_code: "",
    };
  },
  inject: ["emitter"],
  computed: {
    Shipping() {
      return this.cartlist.final_total >= 2000 ? 0 : 100;
    },
    final_total() {
      return this.cartlist.final_total >= 2000
        ? this.cartlist.final_total
        : this.cartlist.final_total + this.Shipping;
    },
  },
  methods: {
    getcartlist() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        this.cartlist = res.data.data;
        this.emitter.emit("sendcartlist", res.data.data);
        console.log(this.cartlist);
      });
    },
    //刪除單筆資料
    deleteitem(id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(api).then((res) => {
        if (res.data.success) {
          this.getcartlist();
        }
      });
    },
    deleteall() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`;
      this.$http.delete(api).then((res) => {
        if (res.data.success) {
          this.getcartlist();
        }
      });
    },
    //更新購物車
    updateCart(item) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const cart = {
        product_id: item.product_id,
        qty: item.qty,
      };
      this.$http.put(api, { data: cart }).then((res) => {
        if (res.data.success) {
          this.getcartlist();
        }
      });
    },
    // 建立訂單資料
    createOrder() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`;
      this.$http.post(api, { data: this.form }).then((res) => {
        if (res.data.success) {
          this.orderId = res.data.orderId;
          this.getOrder();
        }
      });
    },
    //取得訂單資料
    getOrder() {
      this.deleteall();
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        // console.log(res);
        if (res.data.success) {
          this.order = res.data.order;
        }
      });
    },
    // 優惠碼
    addCouponcode() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.isLoading = true;
      this.$http.post(api, { data: coupon }).then((res) => {
        this.isLoading = false;
        // console.log(res.data);
        if (res.data.success) {
          this.getcartlist();
        }
      });
    },
    // 付錢
    payOrder() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.isLoading = true;
      this.$http.post(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.getOrder();
        }
      });
    },
  },
  created() {
    this.getcartlist();
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 960px;
}
img {
  width: 100px;
}
.stepper {
  margin: 24px auto;
  display: flex;
  justify-content: center;
  .step_item {
    margin: 0 4px;
    padding: 17px;
    color: #ccc;
    width: 300px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    border-top: 2px solid #eee;
    &.active {
      color: #333;
      border-top: 2px solid #333;
    }
  }
}
.cart_empty {
  padding: 32px;
  text-align: center;
  background: #fbfbfb;
  margin-top: 6rem;
  h5 {
    margin: 0 auto 24px;
    font-size: 16px;
    font-weight: bold;
  }
  .ui_btn {
    width: 30%;
  }
}
.table {
  th,
  td {
    padding: 10px 20px;
  }
  .form-control,
  .input-group-text {
    width: 35px;
    border: 1px solid #000;
    background: transparent;
  }
}
.ord_info {
  li {
    margin: 10px 0;
  }
  .price {
    font-size: 20px;
    font-weight: bolder;
  }
  .bi {
    margin-right: 5px;
  }
}
.info_form {
  .form-control {
    border: 1px solid #000;
  }
  .ui_btn {
    width: 35%;
  }
}
.order_form {
  .ui_btn {
    width: 35%;
  }
}
.coupons_code {
  font-size: 14px;
  span {
    font-weight: bolder;
  }
}
</style>
