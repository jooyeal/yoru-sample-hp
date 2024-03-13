import { Dropdown } from "@/shared/drop-down";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React from "react";
import { IoAdd, IoLanguage } from "react-icons/io5";

export const ChangeLocaleButton = () => {
  const router = useRouter();
  const { pathname, query, asPath } = router;
  const { t } = useTranslation();
  const handleChangeLocale = (locale: string) => {
    router.push({ pathname, query }, asPath, { locale });
  };
  return (
    <Dropdown
      title={<IoLanguage className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />}
      menuList={[
        {
          title: t("lang.ja"),
          action: () => handleChangeLocale("ja"),
        },
        {
          title: t("lang.en"),
          action: () => handleChangeLocale("en"),
        },
      ]}
    />
  );
};
