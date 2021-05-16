import styled from "styled-components";

import connectDB from "@/utils/connectDB";
import fetchData from "@/utils/fetchData";
import ReviewList from "@/components/layout/ReviewList";
import ScoreBar from "@/components/common/ScoreBar";

const Container = styled.div`
  margin: auto;
`;

const ProductContainer = styled.div`
  padding: 3vw;

  border-top: 3px solid ${(props) => props.theme.lightGray.color};
`;

const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ProductInfo = styled.div`
  width: 100%;
  position: relative;
  padding: 3vw;

  background-color: ${(props) => props.theme.lightGray.color};
`;

const ProductName = styled.div`
`;

const Title = styled.div`
  font-size: 1em;
  margin-top: 1vh;

  & + & {
    margin-bottom: 0.1em;
  }
`;

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & + & {
    margin-top: 1em;
  }
`;

const Score = styled.span`
  font-size: 0.7em;
  color: ${(props) => props.theme.gray.color};
`;

function ProductItem({ product }) {
  const {
    _id,
    name,
    imgUrl,
    imgAlt,
    recycleScoreAvg,
    preferenceScoreAvg,
    reviews,
    // searchCount,
    // recycleType,
    // productType,
    reviewers,
  } = product;

  return (
    <Container>
      <ProductContainer>
        <Picture src={imgUrl} alt={imgAlt} width={100} height={100} />
        <ProductInfo>
          <ProductName>{name}</ProductName>
        </ProductInfo>
      </ProductContainer>

      <ScoreContainer>
        <Title>
          재활용 점수
          <Score>({recycleScoreAvg})</Score>
        </Title>
        <ScoreBar width={50} height={2} score={recycleScoreAvg} />
      </ScoreContainer>

      <ScoreContainer>
        <Title>
          선호도 점수
          <Score>({recycleScoreAvg})</Score>
        </Title>
        <ScoreBar width={50} height={2} score={recycleScoreAvg} />
      </ScoreContainer>

      <ReviewList id={_id} reviews={reviews} />
    </Container>
  );
}

export default ProductItem;

export async function getServerSideProps(context) {
  await connectDB();

  const { productId } = context.params;
  const response = await fetchData("GET", `${process.env.HOMEPAGE_URL}/api/product/${productId}`);

  if (!response.result) {
    return {
      props: { product: {} },
    };
  }

  return {
    props: { product: response.data },
  };
}
