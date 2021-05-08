import { useSelector } from "react-redux";

export default function Main() {
  const mainState = useSelector((state) => state);

  return (
    <div>{JSON.stringify(mainState, null, 4)}</div>
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
