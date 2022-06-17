import { http } from "@/plugins/axios";

export interface User {
  name: string;
  age: number;
  avater: string;
  permissions: string[];
}
export interface Login {
  token: string;
}

export interface ILoginData {
  account: string;
  password: string;
}

class userApi {
  info() {
    return http.request<User>({
      url: `user/info`,
    });
  }

  login(data: ILoginData) {
    return http.request<Login>({
      url: `login`,
      method: "post",
      data,
    });
  }
}

export default new userApi();
