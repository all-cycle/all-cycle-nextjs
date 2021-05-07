import Head from "next/head";
import PropTypes from "prop-types";

import Header from "../Header/Header";
import styles from "./Layout.module.css";

const Layout = (props) => (
  <>
    <Head>
      <title>ALL-Cycle</title>
      <meta name="description" content="Search first, Buy next!" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <div className={styles.layout}>
      {props.children}
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
