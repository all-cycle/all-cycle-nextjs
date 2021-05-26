import styled from "styled-components";

import StyledButton from "@/components/element/StyledButton";
import ReviewItem from "@/components/layout/ReviewItem";

const Container = styled.div`
  margin: 0.3em;
  margin-top: 2em;
  border: 1px solid ${(props) => props.theme.graishGreen.color};
  border-radius: 2vw;
  background-color: ${(props) => props.theme.lightGray.color};
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vw;
  border-top-left-radius: 2vw;
  border-top-right-radius: 2vw;
  font-style: italic;
  font-size: 5vw;
  font-weight: 600;
  color: ${(props) => props.theme.darkGreen.color};
  background-color: ${(props) => props.theme.lightGreen.color};
`;

const ReviewButton = styled(StyledButton)`
  height: 2vh;
  font-size: 0.7em;
  border: none;
  color: ${(props) => props.theme.white.color};
  background-color: ${(props) => props.theme.graishGreen.color};

  &:hover {
    color: ${(props) => props.theme.graishGreen.color};
    background-color: ${(props) => props.theme.white.color};
  }
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
      {reviews?.map((review) => (
        <ReviewItem key={review._id} review={review} />
      ))}
    </Container>
  );
}

export default ReviewList;
