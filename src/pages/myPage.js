export default function MyPage() {
  return (
    <div>mypage</div>
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
