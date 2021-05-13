import { useRouter } from "next/router";
import styled, { css } from "styled-components";

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

const ProductItem = () => {
  const router = useRouter();
  const { productId } = router.query;

  const product = {
    name: "포카리",
    brand: "롯데",
    imgUrl: "/bottle.png",
    imgAlt: "bottle",
    searchCount: 2,
    recycleType: "plastic",
    productType: "ion",
    recycleScoreAvg: 4.2,
    preferenceScoreAvg: 4.8,
    reviewers: ["A", "B"],
    reviews: ["asdf", "efefeff"],
  };

  return (
    <Container>
      <ProductContainer>
        <ImageContainer>
          <Picture src={product.imgUrl} alt={product.imgAlt} />
        </ImageContainer>
        <ProductInfo>
          <ProductBrand>{product.brand}</ProductBrand>
          <ProductName>{product.name}</ProductName>
        </ProductInfo>
      </ProductContainer>
      <ScoreContainer>
        <ScoreBar title="재활용 점수" score={product.recycleScoreAvg} />
        <ScoreBar title="선호도" score={product.preferenceScoreAvg} />
      </ScoreContainer>
      <ReviewList reviews={product.reviews} />
    </Container>
  );
};

export default ProductItem;
