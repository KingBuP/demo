//token储存到localStorage 并设置存在时间

export interface IData {
  data: any;
  expire?: number;
}

export default {
  set(key: string, data: any, expire?: number): void {
    let cache: IData = { data };
    if (expire) {
      cache.expire = new Date().getTime() + expire * 1000;
    }
    localStorage.setItem(key, JSON.stringify(cache));
  },

  get(key: string): any {
    const cacheStore = localStorage.getItem(key);
    if (cacheStore) {
      const cache = JSON.parse(cacheStore);
      const expire = cache.expire;
      if (expire && expire < new Date().getTime()) {
        localStorage.removeItem(key);
        return null;
      }
      return cache.data;
    }
    return null;
  },

  remove(key: string) {
    localStorage.removeItem(key);
  },
};
