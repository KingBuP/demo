import { viteMockServe } from "vite-plugin-mock";
export function setupMockPligin(isBuild: boolean) {
  return viteMockServe({
    mockPath: "mock",
    localEnabled: !isBuild,
  });
}
