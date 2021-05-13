import styled from "styled-components";

import StyledListItem from "@/components/common/StyledListItem";

const Container = styled.div`
`;

const Picture = styled.img`
  width: 100%;
  height: 100%;
  max-width: 10vh;
  object-fit: cover;
`;

function ReviewList() {
  const reviewList = [
    {
      userId: "user1",
      productId: "ion1",
      recycleScore: 4,
      preferenceScore: 3,
      comment: "taste is good",
      picture: "/bottle.png",
    },
    {
      userId: "user1",
      productId: "ion1",
      recycleScore: 4,
      preferenceScore: 3,
      comment: "taste is good",
      picture: "/bottle.png",
    },
    {
      userId: "user1",
      productId: "ion1",
      recycleScore: 4,
      preferenceScore: 3,
      comment: "taste is good",
    },
  ];

  return (
    <Container>
      <Title>REVIEW</Title>
      {reviewList.map((review) => {
        const {
          userId,
          productId,
          recycleScore,
          preferenceScore,
          comment,
          picture,
        } = review;

        return (
          <StyledListItem>
            <Content>
              <UserId>{userId}</UserId>
              {/* TODO 작성일 추가 */}
              <Comment>{comment}</Comment>
            </Content>
            <ImageContainer>
              {picture && (
                <Picture src={picture} alt="user review" />
              )}
            </ImageContainer>
          </StyledListItem>
        );
      })}
    </Container>
  );
}

export default ReviewList;

const Title = styled.div`
  padding: 2vw;
  font-style: italic;
  font-size: 5vw;
  font-weight: 600;
  color: ${(props) => props.theme.darkGreen.color};
  background-color: ${(props) => props.theme.lightGreen.color};
`;

const Content = styled.div`
  flex-basis: 70%;
`;

const UserId = styled.div`
  font-size: 0.7em;
  color: ${(props) => props.theme.green.color};
`;

const Comment = styled.div`
  color: ${(props) => props.theme.gray.color};
`;

const ImageContainer = styled.div`
  flex-basis: 50%;
  height: 10vh;
  object-fit: cover;
  border-top-left-radius: 5vw;
  border-bottom-left-radius: 5vw;

  /* NOTE 사진에서도 text-align 먹히는지 확인 */
  text-align: center;
`;
