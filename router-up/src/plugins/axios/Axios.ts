import { CacheEnum } from "@/enum/cacheEnum";
import router from "@/router";
import errorStore from "@/store/errorStore";
import store from "@/utils/store";
import axios, { AxiosRequestConfig } from "axios";

export default class Axios {
  private instance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    this.interceptors();
  }

  public async request<T, D = ResponseResult<T>>(
    config: AxiosRequestConfig
  ): Promise<D> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.request<D>(config);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
    // const response = this.instance.request<T>(config);
    // return response;
    // return this.instance.request<ResponseResult<T>>(config);
  }
  private interceptors() {
    this.interceptorsRequest();
    this.interceptorsResponse();
  }

  private interceptorsRequest() {
    // 添加请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // 在发送请求之前做些什么
        config.headers = {
          Authorization: "Bearer" + store.get(CacheEnum.TOKEN_NAME),
        };
        return config;
      },
      (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
      }
    );
  }
  private interceptorsResponse() {
    // 添加响应拦截器
    this.instance.interceptors.response.use(
      (response) => {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        return response;
      },
      (error) => {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        switch (error.response.status) {
          case 401:
            //无效token
            store.remove(CacheEnum.TOKEN_NAME);
            router.push({ name: "login-2" });
            break;
          case 422:
            //后台表单验证错误
            errorStore().error = {};
            break;
        }
        return Promise.reject(error);
      }
    );
  }
}
