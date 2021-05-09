import Head from "next/head";

import styles from "./Layout.module.css";

function Layout(props) {
  return (
    <main className={styles.main}>
      <Head>
        <title>ALL-Cycle</title>
        <meta name="description" content="Search first, Buy next!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {props.children}
    </main>
  );
}

export default Layout;
