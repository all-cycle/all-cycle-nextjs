import styled from "styled-components";

import StyledButton from "@/components/common/StyledButton";
import Toggle from "@/components/common/Toggle";

const Container = styled.section`
  width: 100%;
  padding: 0.5em 1em;
`;

const OptionList = styled.ul`
`;

const Option = styled.li`
  & + & {
    margin-top: 0.3em;
  }
  `;

const OptionButton = styled(StyledButton)`
  color: ${(props) => props.theme.green.color};

  &:focus {
    color: ${(props) => props.theme.white.color};
    background-color: ${(props) => props.theme.primary.color};
  }
`;

const Picture = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4vw;
`;

const Caption = styled.figcaption`
  all: unset;
  position: fixed;
  padding: 0.3em 0.5em;
  font-size: 0.7em;
  font-weight: 600;
  text-align: start;
  border: 1px solid ${(props) => props.theme.green.color};
  color: ${(props) => props.theme.green.color};
  background-color: ${(props) => props.theme.white.color};
  z-index: 1;

  &:hover {
    color: ${(props) => props.theme.primary.color};
    border: 1px solid ${(props) => props.theme.primary.color};
  }
`;

const ImageOptionList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 110px);
  grid-template-rows: repeat(auto, 110px);
  gap: 0.5em;
  justify-content: center;
`;

const ImageOption = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => props.theme.green.color};
  padding: 0.4em;
  border-radius: 2vw;

  &:hover {
    background-color: ${(props) => props.theme.primary.color};
  }
`;

const AnswerButton = styled(Toggle)`
  font-size: 1em;
  background-color: ${(props) => props.theme.primary.color};
`;

const Message = styled.div`
  height: 3vh;
  margin: 0.5em;
  margin-bottom: 0.5em;
  text-align: end;
`;

function QuizOption({
  slug,
  examples,
  images,
  alts,
  checkAnswer,
  selectedOption,
  handleSelectOption,
}) {
  return (
    <Container>
      <Message>
        {selectedOption
          && <AnswerButton onClick={checkAnswer}>정답확인</AnswerButton>}
      </Message>

      {examples && (
        <OptionList>
          {examples.map((example, index) => (
            <Option key={slug + example}>
              <Caption>{index + 1}</Caption>
              <OptionButton
                key={slug}
                size={0.9}
                onClick={() => handleSelectOption(example)}
              >
                {example}
              </OptionButton>
            </Option>
          ))}
        </OptionList>
      )}

      {images && (
        <ImageOptionList>
          {images.map((image, index) => (
            <ImageOption
              key={alts[index]}
              onClick={() => handleSelectOption(image)}
            >
              <Caption>{index + 1}</Caption>
              <Picture src={image} alt={alts[index]} />
            </ImageOption>
          ))}
        </ImageOptionList>
      )}
    </Container>
  );
}

export default QuizOption;
