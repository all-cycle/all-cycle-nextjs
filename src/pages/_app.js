import React from "react";
import { Provider as AuthProvider } from "next-auth/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "@/core/store";

import Header from "@/components/layout/Header";
import Layout from "@/components/layout/Layout";
import THEME from "@/util/constants/theme";

export default function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <AuthProvider session={pageProps.session}>
          <ThemeProvider theme={THEME}>
            <Header />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </AuthProvider>
      </Provider>
    </React.StrictMode>
  );
}
