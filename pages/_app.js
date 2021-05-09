import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { useStore } from "../store";

import Header from "../components/Header";
import Layout from "../components/Layout";
import THEME from "../constants/theme";

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
