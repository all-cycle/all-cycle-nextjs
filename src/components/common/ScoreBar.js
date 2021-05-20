import styled, { css } from "styled-components";

const Container = styled.div`
  width: ${(props) => `${props.width}vw`};
  height: ${(props) => `${props.height}vh`};
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
  max-width: 100px;
  border-radius: 3vw;
  background-color: ${(props) => props.theme.primary.color};
  box-shadow: inset 0px 0px 11px rgba(0, 0, 0, 0.15);
  ${Width}
`;

function ScoreBar({ width, height, score = 3 }) {
  return (
    <Container width={width} height={height}>
      <Bar size={Math.floor((score / 5) * 100)} />
    </Container>
  );
}

export default ScoreBar;
