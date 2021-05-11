import { Provider } from "next-auth/client";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "../core/store";

import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";
import THEME from "../util/constants/theme";

export default function App({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <Provider session={pageProps.session}>
        <ThemeProvider theme={THEME}>
          <Header />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </ReduxProvider>
  );
}
