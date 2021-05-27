import {
  QuizContainer,
  QuizBox,
  Category,
  Question,
  NextLink,
} from "./styled";

function List({ quizList }) {
  return (
    <QuizContainer>
      {quizList?.map((quiz) => {
        const { slug, question, category } = quiz;

        return (
          <NextLink key={slug} href={`/_quiz/${slug}`}>
            <QuizBox>
              <Category>CATEGORY: <strong>{category}</strong></Category>
              <Question>{question}</Question>
            </QuizBox>
          </NextLink>
        );
      })}
    </QuizContainer>
  );
}

export default List;
