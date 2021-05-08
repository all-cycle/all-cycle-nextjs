import { useSelector } from "react-redux";

import { Layout, Header } from "@/components";

export default function MyPage() {
  const state = useSelector((state) => state);

  return (
    <Layout>
      <Header />
      <div>My Page</div>
      <code>{JSON.stringify(state, null, 4)}</code>
    </Layout>
  );
}

// export async function getServerSideProps() {
//   const data = { name: "user5" };
//   let response = await fetch("http://localhost:3000/api/user", {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   response = await response.json();

//   if (response.result === "ok") {
//     return {
//       props: { user: "hi" },
//     };
//   }

//   return {
//     props: { user: response.error },
//   };
// }
