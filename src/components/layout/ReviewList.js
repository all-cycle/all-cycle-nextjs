import { useRouter } from "next/router";
import styled from "styled-components";

import ImageContainer from "@/components/common/ImageContainer";
import StyledListItem from "@/components/common/StyledListItem";
import StyledButton from "@/components/common/StyledButton";

const Container = styled.div`
  margin: 0.3em;
  margin-top: 5vh;
  border: 1px solid ${(props) => props.theme.graishGreen.color};
  border-radius: 2vw;
`;

const Picture = styled.img`
  width: 100%;
  height: 100%;
  max-width: 10vh;
  object-fit: cover;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const ReviewButton = styled(StyledButton)`
  height: 2vh;
  font-size: 0.7em;
  border: none;
  color: ${(props) => props.theme.white.color};
  background-color: ${(props) => props.theme.graishGreen.color};
`;

function ReviewList({ reviews, toggle }) {
  return (
    <Container>
      <Title>
        REVIEW
        <ReviewButton onClick={toggle}>
          작성하기
        </ReviewButton>
      </Title>
      {reviews?.map((review) => {
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
                <Picture src={picture} alt="user photo" />
              </ImageContainer>
            )}
          </StyledListItem>
        );
      })}
    </Container>
  );
}

export default ReviewList;
