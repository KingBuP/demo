import uploadApi from "@/apis/uploadApi";

import Editor from "@toast-ui/editor";

export default class {
  editor: Editor;
  ifFullscreen: boolean;
  constructor(el: string, initialValue: string, public height: string) {
    this.ifFullscreen = false;
    this.editor = new Editor({
      el: document.querySelector(el)!,
      initialEditType: "markdown",
      height: height,
      initialValue: initialValue,
      previewStyle: "vertical",
      toolbarItems: this.toolbar() as [],
    });

    this.ImageHook();
  }

  private toolbar() {
    return [
      ["heading", "bold", "italic", "strike"],
      ["hr", "quote"],
      ["ul", "ol", "task", "indent", "outdent"],
      ["table", "image", "link"],
      ["code", "codeblock"],
      //使用选项：自定义最后一个按钮
      [
        {
          el: this.fullscreen(),
          command: "fullscreen",
          tooltip: "全屏",
        },
      ],
    ];
  }

  private fullscreen() {
    // HTMLButtonElement
    const button = document.createElement("button");
    button.innerHTML = "全屏";
    button.style.margin = "0";

    button.addEventListener("click", () => {
      this.toggleFullscreen();
    });

    document.documentElement.addEventListener(
      "keyup",
      (event: KeyboardEvent) => {
        if (event.key == "Escape" && this.ifFullscreen) {
          this.toggleFullscreen();
        }
      }
    );

    return button;
  }

  private toggleFullscreen() {
    const ui = document.querySelector(
      ".toastui-editor-defaultUI"
    ) as HTMLDivElement;
    ui.classList.toggle("fullscreen");
    this.ifFullscreen = !this.ifFullscreen;
    if (this.ifFullscreen === false) {
      this.editor.setHeight(this.height);
    } else {
      // this.editor.setHeight("100vh");
    }
    this.editor.focus();
  }

  private ImageHook() {
    this.editor.removeHook("addImageBlobHook");

    this.editor.addHook(
      "addImageBlobHook",
      async (blob: any, callback: Function) => {
        //上传
        const form = new FormData();
        form.append("file", blob, blob.name);
        const response = await uploadApi.info(form);
        callback(response.data.url, blob.name);
      }
    );
  }
}
