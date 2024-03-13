import { Inter } from "next/font/google";
import { useTranslation } from "next-i18next";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Navigation } from "@/widgets/navigation";
import Image from "next/image";
import { Layout } from "@/shared/layout";
import { Banner3D } from "@/widgets/banner3D";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t } = useTranslation("common");
  return (
    <main className={inter.className}>
      <Navigation
        menuList={[
          {
            title: t("navigation.store"),
            to: "",
          },
          {
            title: t("navigation.mac"),
            to: "",
          },
          {
            title: t("navigation.iPad"),
            to: "",
          },
          {
            title: t("navigation.iPhone"),
            to: "",
          },
          {
            title: t("navigation.watch"),
            to: "",
          },
          {
            title: t("navigation.airPods"),
            to: "",
          },
          {
            title: t("navigation.tv&home"),
            to: "",
          },
          {
            title: t("navigation.entertainment"),
            to: "",
          },
          {
            title: t("navigation.accessory"),
            to: "",
          },
          {
            title: t("navigation.support"),
            to: "",
          },
        ]}
      />
      <Layout>
        <div className="flex flex-col gap-6">
          <section>
            <Image
              src="/assets/banner1.jpeg"
              alt=""
              width={1920}
              height={624}
            />
          </section>
          <section>
            <div className="h-96">
              <Banner3D />
            </div>
          </section>
          <section>
            <video autoPlay loop muted>
              <source src="/assets/video.mp4" type="video/mp4" />
            </video>
          </section>
          <section>
            <div className="grid grid-cols-2 gap-4 w-screen">
              <Image
                src="/assets/image1.jpeg"
                width={960}
                height={960}
                alt=""
              />
              <Image
                src="/assets/image1.jpeg"
                width={960}
                height={960}
                alt=""
              />
            </div>
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
