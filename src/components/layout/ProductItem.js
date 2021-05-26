import styled, { css } from "styled-components";

import ScoreBar from "@/components/common/ScoreBar";
import Toggle from "@/components/common/Toggle";

const colorTheme = css`
  ${({ isEven }) => {
    if (isEven) {
      return css`
        color: ${(props) => props.theme.darkGray.color};
        background-color: ${(props) => props.theme.lightGray.color};
      `;
    }

    return css`
      color: ${(props) => props.theme.darkGray.color};
      background-color: ${(props) => props.theme.badgeBg.color};;
    `;
  }}
`;

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 17vh;
  border-bottom: 2px solid ${(props) => props.theme.lightGray.color};
  font-family: ${(props) => props.theme.fontKor};
  padding: 0.7em;
  padding-left: 10vw;

  ${colorTheme}
`;

const InfoContainer = styled.dl`
  width: 70vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 1em;
`;

const ItemImage = styled.img`
  height: 100%;
  border-radius: 2vw;
`;

const Name = styled(Toggle)`
  margin: 0;
  padding: 0;
  font-size: 0.8em;
  font-weight: 600;

  ${colorTheme}
`;

const Title = styled.dd`
  all: unset;
  font-size: 0.5em;
`;

const Score = styled.span`
  color: ${(props) => props.theme.gray.color};
`;

const ScoreFigure = styled.figure`
  all: unset;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;

  & + & {
    margin-top: 0.5em;
  }
`;

const ScoreContainer = styled.section`
`;

function ProductItem({ product, isEven }) {
  const {
    _id,
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
        <ScoreContainer>
          <ScoreFigure>
            <Title>
              재활용 점수
              <Score>({recycleScoreAvg})</Score>
            </Title>
            <ScoreBar
              score={recycleScoreAvg}
              width={30}
              height={1.8}
            />
          </ScoreFigure>
          <ScoreFigure>
            <Title>
              선호도 점수
              <Score>({preferenceScoreAvg})</Score>
            </Title>
            <ScoreBar
              score={preferenceScoreAvg}
              width={30}
              height={1.8}
            />
          </ScoreFigure>
        </ScoreContainer>
      </InfoContainer>
    </Container>
  );
}

export default ProductItem;
