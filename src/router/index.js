import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/dashboard",
    component: () => import("../views/Dashboard.vue"),
    children: [
      {
        path: "products",
        component: () => import("../views/Products.vue"),
      },
      {
        path: "coupons",
        component: () => import("../views/Coupons.vue"),
      },
      {
        path: "orderlist",
        component: () => import("../views/OrderList.vue"),
      },
    ],
  },
  {
    path: "/user",
    component: () => import("../views/Userboard.vue"),
    children: [
      {
        path: "cart",
        component: () => import("../views/UserCart.vue"),
      },
      {
        path: "product/:productId",
        component: () => import("../views/UserProduct.vue"),
      },
      {
        path: "checkout/:orderId",
        component: () => import("../views/UserCheckout.vue"),
      },
    ],
  },
  {
    path: "/demo",
    component: () => import("../views/Demoboard.vue"),
    children: [
      {
        path: "prodlist",
        component: () => import("../views/DemoProdlist.vue"),
      },
      {
        path: "product/:Id",
        component: () => import("../views/DemoProduct.vue"),
      },
      {
        path: "checkout",
        component: () => import("../views/DemoCheckout.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;
