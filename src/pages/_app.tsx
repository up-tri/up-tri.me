import type { AppProps } from "next/app";
import "./../styles/common/root.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
