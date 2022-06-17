import { http } from "@/plugins/axios";

export interface Article {
  id: number;
  title: string;
  content: string;
}
class articleApi {
  info() {
    return http.request<Article[]>({
      url: `article`,
    });
  }
}

export default new articleApi();
