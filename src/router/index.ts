import { createRouter, createWebHistory } from "vue-router";
import { loadLayoutMiddleware } from "@/router/middleware/loadLayout.middleware";
import { RouteNamesEnum } from "@/router/router.types";
import { AppLayoutsEnum } from "@/layouts/layouts.types";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: RouteNamesEnum.home,
      component: () => import("@/pages/One.vue"),
    },
    {
      path: "/one",
      name: RouteNamesEnum.one,
      component: () => import("@/pages/One.vue"),
    },
    {
      path: "/two",
      name: RouteNamesEnum.two,
      component: () => import("@/pages/Two.vue"),
    },
    {
      path: "/three",
      name: RouteNamesEnum.three,
      component: () => import("@/pages/Three.vue"),
      meta: {
        layout: AppLayoutsEnum.login,
      },
    },
    {
      path: "/four",
      name: RouteNamesEnum.four,
      component: () => import("@/pages/Four.vue"),
      meta: {
        layout: AppLayoutsEnum.login,
      },
    },
    {
      path: "/five",
      name: RouteNamesEnum.five,
      component: () => import("@/pages/Five.vue"),
      meta: {
        layout: AppLayoutsEnum.error,
      },
    },
    {
      path: "/six",
      name: RouteNamesEnum.six,
      component: () => import("@/pages/Six.vue"),
      meta: {
        layout: AppLayoutsEnum.error,
      },
    },
  ],
});

router.beforeEach(loadLayoutMiddleware);

export default router;
