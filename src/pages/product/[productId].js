import { useState } from "react";
import { useSession } from "next-auth/client";
import styled from "styled-components";

import connectDB from "@/utils/connectDB";
import fetchData from "@/utils/fetchData";
import ReviewList from "@/components/layout/ReviewList";
import ScoreBar from "@/components/common/ScoreBar";
import ReviewForm from "@/components/layout/ReviewForm";

const Container = styled.div`
  margin: auto;
  padding-bottom: 30px;
  overflow: auto;
  background-color: ${(props) => props.theme.lightGray.color};
`;

const ProductContainer = styled.div`
  padding: 3vw;

  border-top: 3px solid ${(props) => props.theme.lightGray.color};
`;

const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 3vw;
  box-shadow: 0px 5px 11px rgba(0, 0, 0, 0.15);
  margin-bottom: 1em;
`;

const ProductInfo = styled.div`
  width: 100%;
  position: relative;
  padding: 3vw;

  background-color: ${(props) => props.theme.lightGray.color};
`;

const ProductName = styled.div`
  color: ${(props) => props.theme.darkGray.color};
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const Title = styled.div`
  font-size: 0.7em;
  margin: 0.5em;
  color: ${(props) => props.theme.lightFont.color};
`;

const ScoreContainer = styled.div`
`;

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

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
          <ScoreContainer>
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
          </ScoreContainer>
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
