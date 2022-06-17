import "@wangeditor/editor/dist/css/style.css";
import {
  createEditor,
  createToolbar,
  IEditorConfig,
  IDomEditor,
  IToolbarConfig,
} from "@wangeditor/editor";
import { ApiEnum } from "@/enum/ApiEnum";
type InsertFnType = (url: string, alt?: string, href?: string) => void;

export default class {
  constructor(config: { [key: string]: any }, callback: Function) {
    // 编辑器配置
    const editorConfig: Partial<IEditorConfig> = { MENU_CONF: {} };

    editorConfig.placeholder = "请输入内容";

    editorConfig.onChange = (editor: IDomEditor) => {
      // 当编辑器选区、内容变化时，即触发
      // console.log("content", editor.children);
      // console.log("html", editor.getHtml());
      callback(editor.getHtml());
    };
    if (editorConfig.MENU_CONF && editorConfig) {
      editorConfig.MENU_CONF["uploadImage"] = {
        //服务器接口
        server: ApiEnum.UPLOAD_IMAGE_URL,
        // 单个文件的最大体积限制，默认为 2M
        maxFileSize: 15 * 1024 * 1024, // 5M
        // 上传之前触发
        onBeforeUpload(file: string) {
          // file 选中的文件，格式如 { key: file }
          return file;

          // 可以 return
          // 1. return file 或者 new 一个 file ，接下来将上传
          // 2. return false ，不上传这个 file
        },
        // 上传进度的回调函数
        onProgress(progress: number) {
          // progress 是 0-100 的数字
          // console.log("progress", progress);
        },
        // 单个文件上传成功之后
        onSuccess(file: File, res: any) {
          // console.log(`${file.name} 上传成功`, res);
        },
        // 单个文件上传失败
        onFailed(file: File, res: any) {
          // console.log(`${file.name} 上传失败`, res);
        },
        // 上传错误，或者触发 timeout 超时
        onError(file: File, err: any, res: any) {
          // console.log(`${file.name} 上传出错`, err, res);
        },

        // 自定义上传
        customInsert(res: any, insertFn: InsertFnType) {
          // res 即服务端的返回结果
          // console.log(res);

          // 从 res 中找到 url alt href ，然后插图图片
          // insertFn(url, alt, href);
          insertFn(res.data.url);
        },
      };
    }

    // 工具栏配置
    const toolbarConfig: Partial<IToolbarConfig> = {};

    // 创建编辑器
    const editor = createEditor({
      selector: "#editor-container",
      config: editorConfig,
      mode: "default", // 或 'simple' 参考下文
    });

    editor.setHtml(`<p>${config.modelValue}</p>`);

    // 创建工具栏
    const toolbar = createToolbar({
      editor,
      selector: "#toolbar-container",
      config: toolbarConfig,
      mode: "default", // 或 'simple' 参考下文
    });
  }
}
