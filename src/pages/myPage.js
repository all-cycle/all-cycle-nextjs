import { useSession } from "next-auth/client";
import styled from "styled-components";

const Container = styled.div`
`;

export default function MyPage() {
  const [session] = useSession();

  if (session) {
    return (
      <Container>
        <h1>{session.user.email}</h1>
      </Container>
    );
  }

  return (
    <Container>
      <a href="/">마이페이지, 로그인을 하세요</a>
    </Container>
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
