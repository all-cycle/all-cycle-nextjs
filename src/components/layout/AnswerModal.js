import styled, { css } from "styled-components";

import NextLink from "@/components/element/NextLink";
import Badge from "@/components/element/Badge";

const Container = styled.section`
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const bgcolor = css`
  ${({ result }) => {
    if (result) {
      return css`
        background-color: ${(props) => props.theme.primary.color};
      `;
    }

    return css`
      background-color: ${(props) => props.theme.red.color};
    `;
  }}
`;

const Toggle = styled.span`
  width: 25vw;
  padding: 0.5em 1em;
  border-radius: 2vw;
  font-size: 0.8em;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.white.color};
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.15);

  & + & {
    margin: 1em;
  }

  ${bgcolor}
`;

const Answer = styled.dt`
  width: 100%;
  text-align: start;
  font-size: 0.8em;
`;

const Description = styled.dd`
  all: unset;
  font-size: 0.8em;
  line-height: 2em;
`;

const ButtonContainer = styled.div`
  width: 100%;
  text-align: end;
  margin-bottom: 2em;
`;

function AnswerModal({
  slug,
  realAnswer,
  result,
  description,
  handleReset,
}) {
  return (
    <Container>
      {result ? (
        <ButtonContainer>
          <Toggle result={result}>
            정답입니다!!
          </Toggle>
          <Toggle result={result}>
            <NextLink href="/myPage">뱃지 확인하러 가기</NextLink>
          </Toggle>
        </ButtonContainer>
      ) : (
        <>
          <ButtonContainer>
            <Toggle result="true" onClick={handleReset}>다시풀기</Toggle>
            <Toggle result="true">
              <NextLink href="/quiz">다른 문제 풀어보러 가기</NextLink>
            </Toggle>
          </ButtonContainer>
          <Answer>
            <Toggle result={result}>
              오답
            </Toggle>
            &nbsp;&nbsp;
            <strong>{realAnswer}</strong>
          </Answer>
        </>
      )}
      <Description>{description}</Description>
      <Badge
        name={slug}
        alt={slug}
        width={100}
        height={slug === "plastic1" || slug === "glass1" ? 100 : 110}
        isinpocket={String(result)}
      />
    </Container>
  );
}

export default AnswerModal;
