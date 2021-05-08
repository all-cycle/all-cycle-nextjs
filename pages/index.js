import { Layout, Header } from "../components";

export default function Main() {
  return (
    <Layout>
      <Header />
      <div>hi?</div>
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
