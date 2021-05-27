import StarScore from "./StarScore";
import {
  Li,
  Picture,
  Info,
  CreatedAt,
  Comment,
  ImageContainer,
} from "./styled";

function ReviewItem({ review }) {
  const {
    username,
    recycleScore,
    comment,
    picture,
    createdAt,
  } = review;

  return (
    <Li>
      <Info>
        {username}
        <StarScore recycleScore={recycleScore} />
        <CreatedAt>{createdAt.slice(0, 13)}</CreatedAt>
        {comment && <Comment>{comment}</Comment>}
      </Info>
      {picture && (
        <ImageContainer>
          <Picture src={picture} alt="user photo" />
        </ImageContainer>
      )}
    </Li>
  );
}

export default ReviewItem;
