import path from "path";
import { AliasOptions } from "vite";

const alias = {
  "@": path.resolve(__dirname, "../src"), //这里加../ 因为根据本文件路径
  "#": path.resolve(__dirname, "../types"),
  "@c": path.resolve(__dirname, "../src/components"),
} as AliasOptions;

export default alias;
