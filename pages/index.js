// import PropTypes from "prop-types";

import { Layout, Header } from "@/components";

// import styles from "../styles/Home.module.css";

export default function Main() {
  return (
    <Layout>
      <Header />
      {/* 조건문을 통해서 페이지 분리 */}
    </Layout>
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
