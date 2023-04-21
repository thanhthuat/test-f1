import { Provider } from "react-redux";
import "../styles/scss/index.scss";
import "swiper/css";
import type { AppProps } from "next/app";
import { store } from "lib/redux/store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
