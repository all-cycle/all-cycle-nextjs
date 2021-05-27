import ScoreContainer from "./ScoreContainer";
import {
  Container,
  ItemImage,
  InfoContainer,
  Name,
} from "./styled";

function ProductItem({ product, isEven }) {
  const {
    name,
    imgUrl,
    imgAlt,
    recycleScoreAvg,
    preferenceScoreAvg,
  } = product;

  return (
    <Container isEven={isEven}>
      <ItemImage src={imgUrl} alt={imgAlt} />
      <InfoContainer>
        <Name isEven={isEven} size={0.7}>{name}</Name>
        <ScoreContainer
          recycleScoreAvg={recycleScoreAvg}
          preferenceScoreAvg={preferenceScoreAvg}
        />
      </InfoContainer>
    </Container>
  );
}

export default ProductItem;
