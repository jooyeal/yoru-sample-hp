import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

export default appWithTranslation(function App({
  Component,
  pageProps,
}: AppProps) {
  return <Component {...pageProps} />;
});
