import React from "react";
import { Provider } from "next-auth/client";
import { ThemeProvider } from "styled-components";

import Header from "@/components/layout/Header";
import Layout from "@/components/layout/Layout";
import THEME from "@/util/constants/theme";

import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false; /* eslint-disable import/first */

export default function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Provider session={pageProps.session}>
        <ThemeProvider theme={THEME}>
          <Layout>
            <Header />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
}
