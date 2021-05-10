import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "../core/store";

import Header from "../components/layout/app/Header";
import Layout from "../components/layout/app/Layout";
import THEME from "../util/constants/theme";

export default function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={THEME}>
          <Header />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
}
