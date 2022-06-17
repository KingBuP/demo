//为环境变量添加类型支持
interface ViteEnv {
  VITE_ROUTER_AUTOLOAD: boolean;
  VITE_API_URL: string;
  VITE_MOCK_ENABLE: boolean;
}
//继承ViteEnv
interface ImportMetaEnv extends ViteEnv {
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
