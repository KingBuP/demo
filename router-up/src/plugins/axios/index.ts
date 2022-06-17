// instance 实例

import Axios from "./Axios";

const http = new Axios({
  baseURL: "/api",
  timeout: 1000,
  headers: {},
});

export { http };
