import { useSession, signIn, getSession } from "next-auth/client";
import styled from "styled-components";

import BadgeCollection from "@/components/common/BadgeCollection";
import fetchData from "@/utils/fetchData";
import StyledButton from "@/components/common/StyledButton";
import Loading from "@/components/layout/Loading";

const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  padding: 1em;
  background-color: ${(props) => props.theme.font.color};
  font-family: ${(props) => props.theme.fontEng};
`;

const UserInfo = styled.span`
  padding: 0.5em 1em;
  border-radius: 2vw;
  font-weight: 400;
  font-size: 1.3em;
  color: ${(props) => props.theme.white.color};
  text-align: end;
  border-radius: 4vw;
  margin-bottom: 2em;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
`;

const UserProfile = styled.div`
  position: relative;
  top: -5vh;
  width: 100px;
  height: 100px;
  padding: 0.5em;
  border-radius: 50%;
  background-color: ${(props) => props.theme.lightFont.color};
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
  font-weight: 600;
  color: ${(props) => props.theme.badgeBg.color};
  margin-left: 1em;
  text-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.15);
`;

const Footer = styled.p`
  position: absolute;
  bottom: 1em;
  color: ${(props) => props.theme.lightFont.color};
  font-size: 0.3em;
  margin-left: 1em;
  font-style: italic;
`;

const BadgeContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 0.5em;
  padding: 1em;
`;

export default function MyPage({ userInfo }) {
  const [session, loading] = useSession();

  if (loading) {
    return <Loading />;
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
        <BadgeContainer>
          <BadgeCollection userId={_id} badges={badges} />
        </BadgeContainer>
        <Footer>
          <a href="https://www.freepik.com/vectors/badge">Badge vector created by pikisuperstar - www.freepik.com</a>
        </Footer>
      </Container>
    );
  }

  return (
    <Container>
      <StyledButton onClick={signIn}>마이페이지, 로그인을 하세요</StyledButton>
    </Container>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  const { email } = session.user;
  const response = await fetchData("GET", `${process.env.HOMEPAGE_URL}/api/user/${email}`);

  return {
    props: {
      userInfo: response.data || {},
    },
  };
}
