import { useSession, signIn, getSession } from "next-auth/client";
import styled from "styled-components";

import BadgeCollection from "@/components/common/BadgeCollection";
import fetchData from "@/utils/fetchData";
import StyledButton from "@/components/common/StyledButton";

const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  padding: 1em;
  background-color: ${(props) => props.theme.graishGreen.color};
  font-family: ${(props) => props.theme.fontEng};
`;

const UserInfo = styled.span`
  padding: 0.5em 1em;
  border-radius: 2vw;
  font-weight: 600;
  font-size: 1.3em;
  color: ${(props) => props.theme.white.color};
  text-align: end;
  border: 0.2em solid ${(props) => props.theme.graishGreen.color};
  border-radius: 4vw;
  margin-bottom: 2em;
`;

const UserProfile = styled.div`
  position: relative;
  top: -5vh;
  width: 100px;
  height: 100px;
  padding: 0.5em;
  border-radius: 50%;
`;

const UserImage = styled.img`
  height: 100%;
  border-radius: 50%;
`;

const Email = styled.div`
  font-size: 0.2em;
`;

const Text = styled.span`
  font-size: 1em;
  color: ${(props) => props.theme.lightGray.color};
`;

export default function MyPage({ userInfo }) {
  const [session, loading] = useSession();

  if (loading) {
    return (
      <Container>
        로딩중~~
      </Container>
    );
  }

  const {
    _id,
    name,
    email,
    image,
    badges,
    pictures,
    recycleScore,
    history,
    reviews,
  } = userInfo;

  if (session) {
    return (
      <Container>
        <UserInfo>
          {name}
          <Email>{email}</Email>
          <UserProfile>
            <UserImage src={image} alt="user profile" />
          </UserProfile>
        </UserInfo>

        <Text>My Badge Collections</Text>
        <BadgeCollection userId={_id} badges={badges} />
      </Container>
    );
  }

  return (
    <Container>
      <StyledButton onClick={signIn}>마이페이지, 로그인을 하세요</StyledButton>
    </Container>
  );
}

export async function getServerSideProps({ req, res }) {
  const session = await getSession({ req });
  const { email } = session.user;
  const response = await fetchData("GET", `${process.env.HOMEPAGE_URL}/api/user/${email}`);

  return {
    props: {
      userInfo: response.data || {},
    },
  };
}
