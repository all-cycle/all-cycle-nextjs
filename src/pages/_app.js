import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { useStore } from "../core/store";

import Header from "../components/layout/app/Header";
import Layout from "../components/layout/app/Layout";
import THEME from "../util/constants/theme";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <ThemeProvider theme={THEME}>
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}
