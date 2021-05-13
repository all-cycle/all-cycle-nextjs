import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3vh;
`;

const Title = styled.div`
  font-size: 1em;
  margin-bottom: 1vh;
`;

const Score = styled.span`
  font-size: 0.7em;
  color: ${(props) => props.theme.gray.color};
`;

const BarContainer = styled.div`
  width: 80%;
  height: 3vh;
  border-radius: 3vw;
  background-color: ${(props) => props.theme.lightGray.color};
  box-shadow: inset 0px 0px 11px rgba(0, 0, 0, 0.15);
`;

const Width = css`
  ${(props) => css`
    width: ${props.size}%;
  `}
`;

const Bar = styled.div`
  height: 100%;
  border-radius: 3vw;
  background-color: ${(props) => props.theme.primary.color};
  box-shadow: inset 0px 0px 11px rgba(0, 0, 0, 0.15);
  ${Width}
`;

function ScoreBar({ title, score }) {
  return (
    <Container>
      <Title>
        {title}{" "}
        <Score>({score})</Score>
      </Title>

      <BarContainer>
        <Bar size={Math.floor((score / 5) * 100)} />
      </BarContainer>
    </Container>
  );
}

export default ScoreBar;
