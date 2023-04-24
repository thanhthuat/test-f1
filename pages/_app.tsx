import { Provider } from "react-redux";
import "../styles/scss/index.scss";
import "swiper/css";
import type { AppProps } from "next/app";
import { store } from "lib/redux/store/store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [first, setfirst] = useState(true);

  useEffect(() => {
    setfirst(false);
  }, []);
  return (
    <Provider store={store}>{first ? <div>Loading</div> : <Component {...pageProps} />}</Provider>
  );
}
