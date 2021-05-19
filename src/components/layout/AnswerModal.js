import styled from "styled-components";

const Container = styled.section`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Toggle = styled.span`
  width: 25vw;
  padding: 0.5em;
  border-radius: 2vw;
  font-size: ${(props) => `${props.size}em`};
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.white.color};
  background-color: ${(props) => props.color || props.theme.green.color};
`;

const Answer = styled.dt`
  font-size: 0.8em;
`;

const Description = styled.dd`
  all: unset;
  font-size: 0.9em;
`;

function AnswerModal({
  realAnswer,
  result,
  description,
  handleReset,
}) {
  return (
    <Container>
      {result ? (
        <Toggle color={result ? "#3DD97E" : "red"} size={0.8}>
          정답입니다!!
        </Toggle>
      ) : (
        <>
          <Toggle onClick={handleReset}>다시풀기</Toggle>
          <Answer>
            <Toggle color={result ? "#3DD97E" : "red"} size={0.8}>
              오답
            </Toggle>
            &nbsp;&nbsp;
            <strong>{realAnswer}</strong>
          </Answer>
        </>
      )}
      <Description>{description}</Description>
    </Container>
  );
}

export default AnswerModal;
