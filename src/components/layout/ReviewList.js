import styled from "styled-components";

import ImageContainer from "@/components/common/StyledImageContainer";
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

const Content = styled.dl`
  width: 100%;
  padding: 0.3em;
`;

const Info = styled.dt`
  display: flex;
  justify-content: space-between;
  font-size: 0.7em;
  color: ${(props) => props.theme.green.color};
`;

const UserName = styled.span`
  font-size: 1rem;
  margin-bottom: 0.3em;
`;

const CreatedAt = styled.span`
  color: ${(props) => props.theme.gray.color};
`;

const Comment = styled.dd`
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
          username,
          productId,
          recycleScore,
          preferenceScore,
          comment,
          picture,
          createdAt,
        } = review;

        return (
          <StyledListItem key={_id}>
            <Content>
              <Info>
                <UserName>{username}</UserName>
                <CreatedAt>{createdAt.slice(0, 13)}</CreatedAt>
              </Info>
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
