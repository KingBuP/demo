// 解析env环境变量; 使环境返回值是他本身的值
//环境变量需要在vite和html里都能获取到所以需要判断两次 另一次在 src/types    当然两次的类型推断也不相同 vite是我们在src外部types里.d.ts文件里定义的

// yarn add lodash 安装有深拷贝的工具包   和类型提示 yarn add -D @type/lodash
import _ from "lodash";

export function parseEnv(env: Record<string, any>): ViteEnv {
  const envs: any = _.cloneDeep(env);
  Object.entries(env).forEach(([key, value]) => {
    if (value == "true" || value == "false")
      envs[key] = value == "true" ? true : false;
    else if (/^\d+$/.test(value)) envs[key] = Number(value);
    else if (value == "null") envs[key] = null;
    else if (value == "undefined") envs[key] == undefined;
  });
  return envs;
}
