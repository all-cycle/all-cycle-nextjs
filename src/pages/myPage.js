import { useSession } from "next-auth/client";
import styled from "styled-components";

const Container = styled.div`
`;

export default function MyPage() {
  const [session] = useSession();
  // Call this function whenever you want to
  // refresh props!
  // const refreshData = () => {
  //   router.replace(router.asPath);
  // };

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
