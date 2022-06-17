import { Plugin } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
export function autoImport(plugins: Plugin[]) {
  plugins.push(
    //按需导入  自动导入API
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ["vue", "vue-router"], //在vue后缀组件中不用引入  ts后缀需要导入 （大概
      //为true时在项目根目录自动创建
      dts: "types/auto-imports.d.ts",
    }),
    //按需加载   可以代替组件的自动注册
    Components({
      resolvers: [ElementPlusResolver()],
      //自动加载的组件目录，默认值为 ['src/components']
      dirs: ["src/components"],
      //组件名称包含目录，防止同名组件冲突
      directoryAsNamespace: true,
      //指定类型声明文件，为true时在项目根目录创建  指定位置创建.d.ts
      dts: "types/components.d.ts",
    })
  );
}
//按需加载element
