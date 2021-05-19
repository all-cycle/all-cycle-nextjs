import styled from "styled-components";

import { getAllQuizList, getQuizBySlug } from "@/utils/quizAPI";
import StyledModal from "@/components/common/StyledModal";
import AnswerModal from "@/components/layout/AnswerModal";
import useQuiz from "@/hooks/useQuiz";
import QuizOption from "@/components/layout/QuizOption";
import Toggle from "@/components/common/Toggle";

const Container = styled.section`
  margin-top: 1.5em;
`;

const Question = styled.dt`
  padding: 1em;
  font-size: 1.1em;
  border-radius: 2vw;
  border: 1px solid ${(props) => props.theme.green.color};

  margin: 1em;
`;

function Quiz({ quiz }) {
  const {
    slug,
    question,
    answer,
    realAnswer,
    description,
    examples,
    images,
    alts,
    category,
  } = quiz;

  const {
    result,
    showAnswer,
    selectedOption,
    handleSelectOption,
    checkAnswer,
    handleReset,
  } = useQuiz(answer);

  return (
    <Container>
      <Toggle size={0.7}>{category}</Toggle>
      <Question>
        {question}
      </Question>

      {showAnswer ? (
        <StyledModal>
          <AnswerModal
            realAnswer={realAnswer}
            result={result}
            description={description}
            handleReset={handleReset}
          />
        </StyledModal>
      ) : (
        <QuizOption
          slug={slug}
          examples={examples}
          images={images}
          alts={alts}
          checkAnswer={checkAnswer}
          selectedOption={selectedOption}
          handleSelectOption={handleSelectOption}
        />
      )}
    </Container>
  );
}

export default Quiz;

export async function getStaticProps({ params }) {
  const quiz = getQuizBySlug(params.slug, [
    "slug",
    "question",
    "answer",
    "realAnswer",
    "description",
    "examples",
    "images",
    "alts",
    "category",
  ]);

  return {
    props: { quiz },
  };
}

// 이게 꼭 필요하다고 한다 dynamic SSG page일 경우에 한해서
// https://nextjs.org/docs/messages/invalid-getstaticpaths-value
export async function getStaticPaths() {
  const quizList = getAllQuizList(["slug"]);

  return {
    paths: quizList.map((quiz) => ({
      params: {
        slug: quiz.slug,
      },
    })),
    fallback: false,
  };
}
