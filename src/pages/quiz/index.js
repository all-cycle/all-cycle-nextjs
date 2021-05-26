import { useSession } from "next-auth/client";

import { getAllQuizList } from "@/utils/quizAPI";
import AccessDenied from "@/components/element/AccessDenied";
import Loading from "@/components/layout/Loading";
import {
  Container,
  Message,
  H3,
  Text,
  CreatedBy,
  QuizContainer,
  QuizBox,
  Category,
  Question,
  NextLink,
} from "./styled";

function Quiz({ allQuizList }) {
  const [session, loading] = useSession();

  if (loading) {
    return <Loading />;
  }

  if (!session) {
    return <AccessDenied />;
  }

  return (
    <Container>
      <Message>
        <H3>재활용 상식퀴즈</H3>
        <Text>문제를 맞추고 <br /> 뱃지를 획득하세요</Text>
        <CreatedBy>
          <a href="https://www.freepik.com/vectors/badge">Badge vector created by pikisuperstar - www.freepik.com</a>
        </CreatedBy>
      </Message>
      <QuizContainer>
        {allQuizList?.map((quiz) => {
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
    </Container>
  );
}

export default Quiz;

export async function getStaticProps() {
  const allQuizList = getAllQuizList([
    "slug",
    "question",
    "examples",
    "answer",
    "realAnswer",
    "description",
    "category",
  ]);

  return {
    props: { allQuizList },
  };
}
