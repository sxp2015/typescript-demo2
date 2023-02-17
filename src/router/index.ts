import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "../store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/Index.vue"), // 建议进行路由懒加载，优化访问性能
  },
  {
    path: "/login",
    name: "login",
    meta: { redirectAlreadyLogin: true },
    component: () => import("@/views/login/Index.vue"),
  },
  {
    path: "/column",
    name: "column",
    component: () => import("@/views/artics/Index.vue"),
  },
  {
    path: "/column/:id",
    name: "columnDetail",
    component: () => import("@/components/ColumnDetail.vue"),
  },
  {
    path: "/create",
    name: "create",
    meta: { requiredAuth: true },
    component: () => import("@/views/artics/create.vue"),
  },

  {
    path: "/test",
    name: "test",
    component: () => import("@/views/test/Index.vue"),
  },
  {
    path: "/test/hooks",
    name: "testHooks",
    component: () => import("@/views/test/test01/TestHooks.vue"),
  },
  {
    path: "/test/teleport",
    name: "testTeleport",
    component: () => import("@/views/test/test01/TestDefineComponent.vue"),
  },
  {
    path: "/test/suspense",
    name: "testSuspense",
    component: () => import("@/views/test/test01/TestSuspense.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  //可以进首页，想要发布文章，必须跳到登陆页面
  if (to.meta.requiredAuth && !store.state.user.isLogin) {
    //console.log("meta.==", to.meta);
    next({ name: "login" });
    //已经登陆，还想跳登陆页面的处理逻辑
  } else if (to.meta.redirectAlreadyLogin && store.state.user.isLogin) {
    next({ name: "home" });
    //其他情况，放行
  } else {
    next();
  }
});
export default router;
