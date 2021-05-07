import styles from "../styles/Home.module.css";

import Layout from "../components/Layout/Layout";

function Main() {
  return (
    <div className={styles.container}>
      <Layout>
        <div>Main입니다</div>
      </Layout>
    </div>
  );
}

export default Main;
