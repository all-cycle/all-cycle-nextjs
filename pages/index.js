// import PropTypes from "prop-types";

import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.css";

export default function Main() {
  return (
    <div className={styles.container}>
      <Layout>
        <div>Main입니다</div>
      </Layout>

      <main>
        <div>
          {" "}
          상태입니다
        </div>
      </main>
    </div>
  );
}

Main.propTypes = {
  // isConnected: PropTypes.bool.isRequired,
};

// export async function getServerSideProps() {
//   const { client } = await connectDB();
//   console.log("dbdb", client[0].readyState);

//   // const isConnected = await client.isConnected();
//   const isConnected = client[0].readyState;
//   return {
//     props: { isConnected },
//   };
// }
