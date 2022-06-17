import * as veeValidate from "vee-validate"; //这个库没有默认导出
import { loadLocaleFromURL, localize } from "@vee-validate/i18n";
// import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json";
loadLocaleFromURL(
  "https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_CN.json"
); //使用CDN定义中文
import rules from "@vee-validate/rules";
import yup from "./yup";

veeValidate.configure({
  validateOnInput: true, //设置表单变化时验证
  generateMessage: localize("zh_CN"),
});

Object.keys(rules).forEach((key) => {
  veeValidate.defineRule(key, rules[key]);
});
const useFields = (fields: string[]) => {
  fields.forEach((field) => veeValidate.useField(field));
};
const modules = { yup, ...veeValidate, useFields };

export default modules;
