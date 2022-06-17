import { createPinia } from "pinia";
import { App } from "vue";

export default function setupPinia(app: App) {
  app.use(createPinia());
}

// 对标图
// state    -->  ref   data   响应式数据
// getters  --> computend     计算属性
// actions  --> methods       函数
