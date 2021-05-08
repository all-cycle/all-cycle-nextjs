import { useSelector } from "react-redux";

import Header from "../components/Header";
import Layout from "../components/Layout";

export default function Main() {
  const state = useSelector((state) => state);

  return (
    <Layout>
      <Header />
      <div>{JSON.stringify(state, null, 4)}</div>
    </Layout>
  );
}

// export async function getServerSideProps() {
//   const { client } = await connectDB();
//   console.log("dbdb", client[0].readyState);

//   // const isConnected = await client.isConnected();
//   const isConnected = client[0].readyState;
//   return {
//     props: { isConnected },
//   };
// }
