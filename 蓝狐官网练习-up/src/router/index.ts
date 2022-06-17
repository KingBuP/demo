import { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import autolaod from "./autolaod";
const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...autolaod],
});

export function setupRouter(app: App) {
  app.use(router);
}

export default router;
