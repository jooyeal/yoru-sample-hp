import { Inter } from "next/font/google";
import { useTranslation } from "next-i18next";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t } = useTranslation("common");
  return <main>{t("header.store")}</main>;
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  if (!locale) return { props: {} };
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
