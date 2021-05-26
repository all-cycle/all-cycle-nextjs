import styled from "styled-components";

import ImageContainer from "@/components/common/StyledImageContainer";
// import StyledListItem from "@/components/common/StyledListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Container = styled.li`
  width: 100%;
  /* height: 100%; */
  /* min-height: 10vh; */
  display: flex;
  align-items: center;
  padding: 0.3em;

  border-top: 1px solid ${(props) => props.theme.darkGreen.color};
`;

const Picture = styled.img`
  width: 100%;
  height: 100%;
  max-width: 10vh;
  object-fit: cover;
`;
const Content = styled.dl`
  width: 100%;
  padding: 0.3em;
`;

const Info = styled.dt`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.7em;
  color: ${(props) => props.theme.green.color};
`;

const UserName = styled.span`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

const CreatedAt = styled.span`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.gray.color};
`;

const Comment = styled.dd`
  color: ${(props) => props.theme.gray.color};
`;

const Star = styled.span`
  font-size: 0.7em;
  margin-left: 1.5em;
`;

function ReviewItem({ review }) {
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

  const scoreList = [1, 2, 3, 4, 5];

  return (
    <Container>
      <Content>
        <Info>
          <UserName>
            {username}
            <Star>평점: {" "}{recycleScore}(
              {scoreList.map((score) => (
                <FontAwesomeIcon
                  icon={faStar}
                  color={score <= recycleScore ? "#3DD97E" : "#A69E9E"}
                />
              ))})
            </Star>
          </UserName>
          <CreatedAt>{createdAt.slice(0, 13)}</CreatedAt>
        </Info>
        {comment && <Comment>{comment}</Comment>}
      </Content>
      {picture && (
        <ImageContainer>
          <Picture src={picture} alt="user photo" />
        </ImageContainer>
      )}
    </Container>
  );
}

export default ReviewItem;
