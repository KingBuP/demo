import { App } from "vue";
import { install } from "@icon-park/vue-next/es/all";

export default function setupIconPark(app: App) {
  install(app);
  install(app, "i");
}
