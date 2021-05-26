import { useSession, signIn, getSession } from "next-auth/client";

import BadgeCollection from "@/components/element/BadgeCollection";
import fetchData from "@/utils/fetchData";
import Loading from "@/components/layout/Loading";
import {
  Container,
  StyledButton,
  UserInfo,
  UserProfile,
  UserImage,
  Email,
  Text,
  ReviewList,
  Content,
  Image,
  Score,
  PhotoList,
  ImageContainer,
  BadgeContainer,
  Footer,
} from "./styled";

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

  if (!session) {
    return (
      <Container>
        <StyledButton onClick={signIn}>
          마이페이지, 로그인을 하세요
        </StyledButton>
      </Container>
    );
  }

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
            <Score>
              재활용 점수: {review.recycleScore}
            </Score>
          </Content>
        ))}
      </ReviewList>

      <Text>My Photos</Text>
      <PhotoList>
        {pictures?.map((picture) => (
          <ImageContainer key={picture}>
            <Image src={picture} alt={picture} />
          </ImageContainer>
        ))}
      </PhotoList>

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
