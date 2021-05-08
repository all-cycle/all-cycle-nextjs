import { Provider } from "react-redux";
import { useStore } from "../store";

import Header from "../components/Header";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Layout>
        <Header />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
