import { useSession } from "next-auth/client";
import styled from "styled-components";

import Photo from "@/components/layout/Photo";

const Container = styled.div`
`;

export default function MyPage() {
  const [session] = useSession();

  if (session) {
    return (
      <Container>
        <h1>{session.user.email}</h1>
        <Photo />
      </Container>
    );
  }

  return (
    <Container>
      <a href="/">마이페이지, 로그인을 하세요</a>
    </Container>
  );
}
