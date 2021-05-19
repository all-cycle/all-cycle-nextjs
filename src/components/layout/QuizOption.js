import styled from "styled-components";

import StyledButton from "@/components/common/StyledButton";
import Toggle from "@/components/common/Toggle";
import StyledList from "../common/StyledList";

const Container = styled.section`
`;

const Option = styled.dd`
  all: unset;
`;

const OptionButton = styled(StyledButton)`
  color: ${(props) => props.theme.white.color};
  background-color: ${(props) => props.theme.primary.color};
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
  border: 1px solid ${(props) => props.theme.primary.color};
  color: ${(props) => props.theme.primary.color};
  background-color: ${(props) => props.color || props.theme.white.color};
  z-index: 1;
`;

const ImageOption = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 110px);
  grid-template-rows: repeat(auto, 110px);
  gap: 0.5em;
  justify-content: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.primary.color};
  padding: 0.4em;
  border-radius: 2vw;
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
        {selectedOption && <AnswerButton onClick={checkAnswer}>정답확인</AnswerButton>}
      </Message>
      {examples && (
        <Option>
          {examples.map((example, index) => (
            <StyledList key={slug + example}>
              <Caption>{index + 1}</Caption>
              <OptionButton
                key={slug}
                size={0.9}
                onClick={() => handleSelectOption(example)}
              >
                {example}
              </OptionButton>
            </StyledList>
          ))}
        </Option>
      )}
      {images && (
        <ImageOption>
          {images.map((image, index) => (
            <ImageContainer
              key={alts[index]}
              onClick={() => handleSelectOption(image)}
            >
              <Caption>{index + 1}</Caption>
              <Picture src={image} alt={alts[index]} />
            </ImageContainer>
          ))}
        </ImageOption>
      )}
    </Container>
  );
}

export default QuizOption;
