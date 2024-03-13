import React, { useMemo, useState } from "react";
import { MenuButton } from "./menu-button";
import { LinkHoverMenu } from "@/shared/link";
import { IoLogoApple } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { PiBag } from "react-icons/pi";
import { useTranslation } from "next-i18next";
import { TLinkHoverMenuSection, TNavigationProps } from "../model/type";
import { ChangeLocaleButton } from "@/features/change-locale";

export const Navigation = ({ menuList }: TNavigationProps) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);
  const [menuIndex, setMenuIndex] = useState<number>();
  const menuContent = useMemo<TLinkHoverMenuSection | undefined>(() => {
    switch (menuIndex) {
      case 0:
        return [
          {
            title: t("navigationMenu.shop"),
            linkList: [
              { title: t("navigationMenu.shopTheLatest"), to: "" },
              { title: t("navigationMenu.mac"), to: "" },
              { title: t("navigationMenu.iPad"), to: "" },
              { title: t("navigationMenu.iPhone"), to: "" },
              { title: t("navigationMenu.appleWatch"), to: "" },
              { title: t("navigationMenu.appleVisionPro"), to: "" },
              { title: t("navigationMenu.Accessories"), to: "" },
            ],
          },
          {
            title: t("navigationMenu.quickLinks"),
            linkList: [
              { title: t("navigationMenu.findAStore"), to: "" },
              { title: t("navigationMenu.orderStatus"), to: "" },
              { title: t("navigationMenu.appleTradeIn"), to: "" },
              { title: t("navigationMenu.financing"), to: "" },
            ],
          },
          {
            title: t("navigationMenu.shopSpecialStores"),
            linkList: [
              { title: t("navigationMenu.certifiedRefurbished"), to: "" },
              { title: t("navigationMenu.education"), to: "" },
              { title: t("navigationMenu.business"), to: "" },
              { title: t("navigationMenu.veteransAndMilitary"), to: "" },
              { title: t("navigationMenu.government"), to: "" },
            ],
          },
        ];
      case 1:
        return [
          {
            title: t("navigationMenu.exploreMac"),
            linkList: [
              { title: t("navigationMenu.exploreAllMac"), to: "" },
              { title: t("navigationMenu.macBookAir"), to: "" },
              { title: t("navigationMenu.macBookPro"), to: "" },
              { title: t("navigationMenu.iMac"), to: "" },
              { title: t("navigationMenu.macMini"), to: "" },
              { title: t("navigationMenu.macStudio"), to: "" },
              { title: t("navigationMenu.macPro"), to: "" },
            ],
          },
          {
            title: t("navigationMenu.shopMac"),
            linkList: [
              { title: t("navigationMenu.shopMac"), to: "" },
              { title: t("navigationMenu.macAccessories"), to: "" },
              { title: t("navigationMenu.appleTradeIn"), to: "" },
              { title: t("navigationMenu.financing"), to: "" },
            ],
          },
        ];
      default:
        return undefined;
    }
  }, [menuIndex]);

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
          <IoLogoApple size={20} />
          {menuList.map((menu, index) => (
            <div
              key={index}
              onMouseOver={() => {
                setOpen(true);
                setMenuIndex(index);
              }}
            >
              <MenuButton key={index} title={menu.title} to={menu.to} />
            </div>
          ))}
          <IoSearch size={20} />
          <PiBag size={20} />
          <ChangeLocaleButton />
        </div>
        <LinkHoverMenu
          open={open}
          onClose={() => setOpen(false)}
          sections={menuContent}
        />
      </div>
    </>
  );
};
