import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/Index.vue"), // 建议进行路由懒加载，优化访问性能
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/Index.vue"),
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

export default router;
