import { IconType } from "@icon-park/vue-next/es/all";

interface Menu {
  mtitle?: string;
  micon?: IconType;
  isClick?: boolean;
  route?: string;
}

export interface IMenu extends Menu {
  children?: Menu[];
}
