import styled from "styled-components";

import ImageContainer from "@/components/common/ImageContainer";
import StyledListItem from "@/components/common/StyledListItem";

const Container = styled.div`
`;

const Picture = styled.img`
  width: 100%;
  height: 100%;
  max-width: 10vh;
  object-fit: cover;
`;

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

function ReviewList({ reviews }) {
  return (
    <Container>
      <Title>REVIEW</Title>
      {reviews.length > 0
        && (reviews.map((review) => {
          const {
            _id,
            userId,
            productId,
            recycleScore,
            preferenceScore,
            comment,
            picture,
          } = review;

          return (
            <StyledListItem key={_id}>
              <Content>
                <UserId>{userId}</UserId>
                {/* TODO 작성일 추가 */}
                <Comment>{comment}</Comment>
              </Content>
              {picture && (
                <ImageContainer>
                  <Picture src={picture} alt="user review" />
                </ImageContainer>
              )}
            </StyledListItem>
          );
        }))}
    </Container>
  );
}

export default ReviewList;
