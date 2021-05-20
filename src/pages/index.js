import styled from "styled-components";

import HeadingLine from "@/components/common/HeadingLine";
import MainCamera from "@/components/layout/MainCamera";
import fetchData from "@/utils/fetchData";

const Container = styled.div`
  width: 100vw;
  height: 90vh;
  margin: 0;
  background-color: ${(props) => props.theme.primary.color};
  overflow: hidden;
`;

const TopItems = styled.div`
  display: flex;
  width: 100vw;
  margin: 0.3em 0;
  padding-bottom: 2em;
`;

const ItemImage = styled.img`
  height: 100%;
`;

const ImageContainer = styled.div`
  flex-basis: 50%;
  height: 10vh;
  object-fit: cover;
  border-top-left-radius: 5vw;
  border-bottom-left-radius: 5vw;

  /* NOTE 사진에서도 text-align 먹히는지 확인 */
  text-align: center;
`;

const ItemInfo = styled.span`
  font-size: 0.5em;
`;

export default function Main({ topScoreList }) {
  return (
    <Container>
      <MainCamera />
      <HeadingLine title="TOP LANK ITEMS" />
      <TopItems>
        {topScoreList.length && (
          topScoreList.map((product, index) => {
            const {
              _id, imgUrl, imgAlt, name,
            } = product;
            return (
              <ImageContainer key={_id}>
                <ItemImage src={imgUrl} alt={imgAlt} />
                {/* <ItemInfo>{name}</ItemInfo> */}
              </ImageContainer>
            );
          })
        )}
      </TopItems>
    </Container>
  );
}

export async function getServerSideProps() {
  const response = await fetchData("GET", `${process.env.HOMEPAGE_URL}/api/product/topScore`);

  return {
    props: {
      topScoreList: response.data || [],
    },
  };
}
