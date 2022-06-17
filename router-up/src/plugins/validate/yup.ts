import * as yup from "yup";

yup.setLocale({
  mixed: {
    required: "请填写${label}",
  },
  string: {
    email: "邮箱格式错误",
    min: "${label}内容不能小于6位数",
  },
});

export default yup;
