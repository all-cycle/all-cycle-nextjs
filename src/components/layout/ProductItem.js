import styled from "styled-components";

import ScoreBar from "@/components/common/ScoreBar";

const Container = styled.section`
  display: flex;
  align-items: center;
  height: 15vh;
  border-bottom: 2px solid ${(props) => props.theme.lightGray.color};
  font-family: ${(props) => props.theme.font};
  padding: 0.7em;
`;

const InfoContainer = styled.dl`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 1em;
`;

const ItemImage = styled.img`
  height: 100%;
`;

const Name = styled.dt`
  font-size: 0.8em;
`;

const Title = styled.dd`
  all: unset;
  font-size: 0.5em;
  margin-left: 1.5em;
`;

const Score = styled.span`
  color: ${(props) => props.theme.gray.color};
`;

const ScoreContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function ProductItem({ product }) {
  const {
    _id,
    name,
    imgUrl,
    imgAlt,
    recycleScoreAvg,
    preferenceScoreAvg,
  } = product;

  return (
    <Container>
      <ItemImage src={imgUrl} alt={imgAlt} />
      <InfoContainer>
        <Name>{name}</Name>
        <ScoreContainer>
          <Title>
            재활용 점수
            <Score>({recycleScoreAvg})</Score>
          </Title>
          <ScoreBar
            score={recycleScoreAvg}
            width={35}
            height={1.8}
          />
        </ScoreContainer>
        <ScoreContainer>
          <Title>
            선호도 점수
            <Score>({preferenceScoreAvg})</Score>
          </Title>
          <ScoreBar
            score={preferenceScoreAvg}
            width={35}
            height={1.8}
          />
        </ScoreContainer>
      </InfoContainer>
    </Container>
  );
}

export default ProductItem;
