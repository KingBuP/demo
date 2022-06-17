// 用户
import { MockMethod } from "vite-plugin-mock";
import { Random } from "mockjs";
export default [
  {
    url: "/api/user/info",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "请求成功",
        status: "success",
        data: {
          name: "用户名",
          age: 20,
          avater: "/images/17.gif",
          permissions: ["editor_markdown", "article_edit", "editor_base"],
        },
      };
    },
  },
  {
    url: "/api/login",
    method: "post",
    response: () => {
      return {
        code: 200,
        message: "登入成功",
        status: "success",
        data: {
          token: Random.string(10),
        },
      };
    },
  },
] as MockMethod[];
