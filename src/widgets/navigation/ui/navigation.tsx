import React, { useState } from "react";
import { MenuButton } from "./menu-button";
import { LinkHoverMenu } from "@/shared/link";

type Props = {
  menuList: {
    title: string;
    to: string;
  }[];
};

export const Navigation = ({ menuList }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className={`fixed top-0 h-11 w-screen 
        ${open ? "h-screen" : ""} 
        transition-all`}
      >
        <div
          className={`py-2 flex justify-center items-center gap-8 ${
            open ? "bg-slate-50" : "bg-slate-50/80"
          }`}
        >
          {menuList.map((menu, index) => (
            <div key={index} onMouseOver={() => setOpen(true)}>
              <MenuButton key={index} title={menu.title} to={menu.to} />
            </div>
          ))}
        </div>
        <LinkHoverMenu open={open} onClose={() => setOpen(false)} />
      </div>
    </>
  );
};
