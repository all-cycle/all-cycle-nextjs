import { useState } from "react";
import { useSession } from "next-auth/client";

import connectDB from "@/utils/connectDB";
import fetchData from "@/utils/fetchData";
import ReviewList from "@/components/layout/ReviewList";
import ScoreBar from "@/components/element/ScoreBar";
import ReviewForm from "@/components/layout/ReviewForm";
import {
  Container,
  ProductContainer,
  Picture,
  ProductInfo,
  ProductName,
  Title,
  Figure,
  Score,
} from "./styled";

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

  const [isList, setIsList] = useState(true);
  const [session] = useSession();

  function toggle() {
    setIsList((prev) => !prev);
  }

  if (!session) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <ProductContainer>
        <Picture src={imgUrl} alt={imgAlt} width={100} height={100} />
        <ProductInfo>
          <ProductName>{name}</ProductName>
        </ProductInfo>
      </ProductContainer>

      {isList ? (
        <>
          <div>
            <Figure>
              <Title>
                재활용 점수
                <Score>({recycleScoreAvg})</Score>
              </Title>
              <ScoreBar width={50} height={2} score={recycleScoreAvg} />
            </Figure>

            <Figure>
              <Title>
                선호도 점수
                <Score>({recycleScoreAvg})</Score>
              </Title>
              <ScoreBar width={50} height={2} score={recycleScoreAvg} />
            </Figure>
          </div>
          <ReviewList reviews={reviews} toggle={toggle} />
        </>
      ) : (
        <ReviewForm productId={_id} toggle={toggle} />
      )}
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
