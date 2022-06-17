import { http } from "@/plugins/axios";

export interface upLaodImage {
  url: string;
}

class uploadImage {
  info(data: FormData) {
    return http.request<upLaodImage>({
      url: `upload/images`,
      method: "post",
      data,
    });
  }
}

export default new uploadImage();
