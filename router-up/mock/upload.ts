// 测试上传图片
import { MockMethod } from "vite-plugin-mock";
import { Random } from "mockjs";
export default [
  {
    url: "/api/upload/images",
    method: "post",
    response: () => {
      return {
        code: 200,
        message: "上传成功",
        status: "success",
        data: {
          url: "/images/17.gif",
        },
      };
    },
  },
] as MockMethod[];
