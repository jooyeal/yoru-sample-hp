import { Inter } from "next/font/google";
import { useTranslation } from "next-i18next";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Navigation } from "@/widgets/navigation";
import Image from "next/image";
import { Layout } from "@/shared/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t } = useTranslation("common");
  return (
    <main className={inter.className}>
      <Navigation
        menuList={[
          {
            title: t("navigation.store"),
            to: "hello",
          },
          {
            title: t("navigation.mac"),
            to: "hello",
          },
          {
            title: t("navigation.iPad"),
            to: "hello",
          },
          {
            title: t("navigation.iPhone"),
            to: "hello",
          },
          {
            title: t("navigation.watch"),
            to: "hello",
          },
          {
            title: t("navigation.airPods"),
            to: "hello",
          },
          {
            title: t("navigation.tv&home"),
            to: "hello",
          },
          {
            title: t("navigation.entertainment"),
            to: "hello",
          },
          {
            title: t("navigation.accessory"),
            to: "hello",
          },
          {
            title: t("navigation.support"),
            to: "hello",
          },
        ]}
      />
      <Layout>
        <div className="flex flex-col gap-6">
          <section>
            <Image src="/assets/banner.jpg" alt="" width={1920} height={624} />
          </section>
          <section>
            <div className="h-96">hello</div>
          </section>
        </div>
      </Layout>
    </main>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  if (!locale) return { props: {} };
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
