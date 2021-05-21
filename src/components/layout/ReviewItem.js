import styled from "styled-components";

import ImageContainer from "@/components/common/StyledImageContainer";
import StyledListItem from "@/components/common/StyledListItem";

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
}

export default ReviewItem;
