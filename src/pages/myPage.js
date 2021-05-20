import { useSession, signIn } from "next-auth/client";
import styled from "styled-components";

import fetchData from "@/utils/fetchData";
import StyledButton from "@/components/common/StyledButton";

const Container = styled.div`
`;

export default function MyPage({ userInfo }) {
  // const [session] = useSession();

  console.log(userInfo);

  // if (session) {
  // }
  return (
    <Container>
      <h1>hihi</h1>
    </Container>
  );

  // return (
  //   <Container>
  //     <StyledButton onClick={signIn}>마이페이지, 로그인을 하세요</StyledButton>
  //   </Container>
  // );
}

export async function getServerSideProps() {
  const response = await fetchData("GET", `${process.env.HOMEPAGE_URL}/api/mypage`);
  console.log(response);

  return {
    props: {
      userInfo: response.data || {},
    },
  };
}
