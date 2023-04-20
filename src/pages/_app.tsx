import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import { Background } from "../styles/Style";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <Component {...pageProps} />
        <GlobalStyle />
      </Background>
    </ThemeProvider>
  );
}
