import { ReactNode } from "react";

export type TDropdownProps = {
  title: ReactNode;
  menuList: { title: ReactNode; action: () => void }[];
};
