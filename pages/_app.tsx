import { Provider } from "react-redux";
import "../styles/scss/index.scss";
import "swiper/css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
