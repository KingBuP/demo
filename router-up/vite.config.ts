import { ConfigEnv, defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import alias from "./vite/alias";
import path from "path";
import { parseEnv } from "./vite/util"; //注意路径一点也不能遍
import { setupPlugins } from "./vite/plugins";
//打包插件
import { visualizer } from "rollup-plugin-visualizer";

// 引入path
// https://vitejs.dev/config/

// mode 运行模式   command 表示目前处于的阶段（serve编译|development开发）
export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command == "build"; //判断是否属于编译模式
  const root = process.cwd();
  // const env = loadEnv(mode, root);
  const env = parseEnv(loadEnv(mode, root));

  return {
    // plugins: [vue()], 把plugins(插件)配置剥离出去   插件
    plugins: [...setupPlugins(isBuild, env), visualizer()],
    // 自定义 路径部分名
    resolve: {
      alias,
    },
    //模块式打包
    build: {
      rollupOptions: {
        emptyOutDir: true,
        output: {
          manualChunks(id: string) {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          },
        },
      },
    },
    //开发环境设置
    server: {
      proxy: {
        "/api": {
          //
          target: env.VITE_API_URL,
          //跨域请求携带cookie
          changeOrigin: true,
          //url 重写删除‘/api’
          rewrite: (path: string) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
};
