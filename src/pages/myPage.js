import { useSession, signIn, getSession } from "next-auth/client";
import styled from "styled-components";

import BadgeCollection from "@/components/common/BadgeCollection";
import fetchData from "@/utils/fetchData";
import StyledButton from "@/components/common/StyledButton";
import Loading from "@/components/layout/Loading";
import ReviewItem from "@/components/layout/ReviewItem";
import StyledList from "@/components/common/StyledList";

const Container = styled.div`
  height: 90vh;
  max-height: 800px;
  display: flex;
  flex-direction: column;
  padding: 1em;
  background-color: ${(props) => props.theme.font.color};
  font-family: ${(props) => props.theme.fontEng};
  overflow: hidden;
`;

const UserInfo = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 0.5em 1em;
  margin-bottom: 1.5em;
  border-radius: 2vw;
  font-weight: 400;
  font-size: 1.3em;
  color: ${(props) => props.theme.white.color};
  text-align: end;
  border-radius: 4vw;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
`;

const UserProfile = styled.div`
  width: 90px;
  height: 90px;
  padding: 0.2em;
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
  color: ${(props) => props.theme.lightFont.color};
  font-size: 0.3em;
  margin-left: 1em;
  font-style: italic;
  text-align: center;
`;

const BadgeContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  justify-content: center;
  gap: 0.5em;
  padding: 1em;
`;

const ReviewList = styled.ul`
  padding: 1em;
  margin-bottom: 1.5em;
  max-height: 180px;
  overflow-y: scroll;
`;

const Content = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.4em 1em;
  border-radius: 2vw;
  font-size: 0.5em;
  color: white;
  background-color: ${(props) => props.theme.darkGray.color};

  & + & {
    margin-top: 0.7em;
  }
`;

const Score = styled.span`
  font-size: 0.3em;
  color: ${(props) => props.theme.gray.color};
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

  console.log(reviews);

  if (session) {
    return (
      <Container>
        <UserInfo>
          <UserProfile>
            <UserImage src={image} alt="user profile" />
          </UserProfile>
          <div>
            {name}
            <Email>{email}</Email>
          </div>
        </UserInfo>

        <Text>My Reviews</Text>
        <ReviewList>
          {reviews?.map((review) => (
            <Content key={review._id}>
              {review.productId.name}
              <Score>재활용 점수: {review.recycleScore}</Score>
            </Content>
          ))}
        </ReviewList>

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
