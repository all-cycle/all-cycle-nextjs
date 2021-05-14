import { useRouter } from "next/router";
import styled from "styled-components";

import ReviewList from "@/components/layout/ReviewList";
import ScoreBar from "@/components/layout/ScoreBar";

const Container = styled.div`
  width: 90%;
  margin: auto;
`;

const ProductContainer = styled.div`
  padding: 3vw;

  border-top: 3px solid ${(props) => props.theme.lightGray.color};
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 40vh;
  padding: 2vw;

  /* NOTE 사진에서도 text-align 먹히는지 확인 */
  text-align: center;
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

const ProductBrand = styled.div`
  font-size: 2vw;
`;

const ScoreContainer = styled.div`
  padding: 3vh;
`;

const ProductItem = ({ product }) => {
  const router = useRouter();
  const {
    _id,
    name,
    imgUrl,
    imgAlt,
    recycleScoreAvg,
    preferenceScoreAvg,
    reviews,
    // brand,
    // searchCount,
    // recycleType,
    // productType,
    // reviewers,
  } = product;

  return (
    <Container>
      <ProductContainer>
        <ImageContainer>
          <Picture src={imgUrl} alt={imgAlt} />
        </ImageContainer>
        <ProductInfo>
          {/* <ProductBrand>{brand}</ProductBrand> */}
          <ProductName>{name}</ProductName>
        </ProductInfo>
      </ProductContainer>

      <ScoreContainer>
        <ScoreBar title="재활용 점수" score={recycleScoreAvg} />
        <ScoreBar title="선호도" score={preferenceScoreAvg} />
      </ScoreContainer>

      <button type="button" onClick={() => router.push(`/review/${_id}`)}>리뷰쓰기</button>
      {reviews.length > 0 && <ReviewList reviews={reviews} />}
    </Container>
  );
};

export default ProductItem;

export async function getServerSideProps(context) {
  const { productId } = context.params;
  const response = await fetch(`${process.env.HOMEPAGE_URL}/api/product/${productId}`);
  const data = await response.json();

  return {
    props: { product: data.product },
  };
}
