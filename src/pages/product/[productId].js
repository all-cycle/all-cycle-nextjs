import { useRouter } from "next/router";
import styled from "styled-components";

import connectDB from "@/utils/connectDB";
import Review from "@/models/Review";
import Product from "@/models/Product";

import fetchData from "@/utils/fetchData";
import ReviewList from "@/components/layout/ReviewList";
import ScoreBar from "@/components/layout/ScoreBar";
import StyledButton from "@/components/common/StyledButton";

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

const ScoreContainer = styled.div`
  padding: 3vh;
`;

function ProductItem({ product }) {
  const router = useRouter();
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
        <ImageContainer>
          <Picture src={imgUrl} alt={imgAlt} />
        </ImageContainer>
        <ProductInfo>
          <ProductName>{name}</ProductName>
        </ProductInfo>
      </ProductContainer>

      <ScoreContainer>
        <ScoreBar title="재활용 점수" score={recycleScoreAvg} />
        <ScoreBar title="선호도" score={preferenceScoreAvg} />
      </ScoreContainer>

      <StyledButton onClick={() => router.push(`/review/${_id}`)}>리뷰쓰기</StyledButton>
      <ReviewList reviews={reviews} />
    </Container>
  );
}

export default ProductItem;

export async function getServerSideProps(context) {
  await connectDB();

  const { productId } = context.params;
  let data = await Product.findOne({ _id: productId });
  data = await data.populate("reviews");
  // const product = JSON.parse(JSON.stringify(data));
  // const data = await fetchData("GET", `http://localhost:3000/api/product/${productId}`);

  return {
    props: { product: data },
  };
}
