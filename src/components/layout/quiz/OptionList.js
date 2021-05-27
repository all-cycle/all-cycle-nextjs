import { Container, AnswerButton, ButtonContainer } from "./styled";
import TextOptions from "./TextOptions";
import ImageOptions from "./ImageOptions";

function QuizOption({
  examples,
  images,
  alts,
  checkAnswer,
  selectedOption,
  handleSelectOption,
}) {
  return (
    <Container>
      <ButtonContainer>
        {selectedOption
          && <AnswerButton onClick={checkAnswer}>정답확인</AnswerButton>}
      </ButtonContainer>

      {examples && (
        <TextOptions
          list={examples}
          handleSelectOption={handleSelectOption}
        />
      )}

      {images && (
        <ImageOptions
          list={images}
          alts={alts}
          handleSelectOption={handleSelectOption}
        />
      )}
    </Container>
  );
}

export default QuizOption;
