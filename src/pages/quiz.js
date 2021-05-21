import { useSession } from "next-auth/client";
import styled from "styled-components";

import { getAllQuizList } from "@/utils/quizAPI";
import AccessDenied from "@/components/common/AccessDenied";
import Loading from "@/components/layout/Loading";
import Toggle from "@/components/common/Toggle";
import NextLink from "@/components/common/NextLink";

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  color: ${(props) => props.theme.primary.color};
  background-color:  ${(props) => props.theme.badgeBg.color};
`;

const QuizContainer = styled.ul`
  width: 100%;
  margin-top: 3.5em;
  padding: 0.5em;
  gap: 0.3em;
  font-size: 1em;
  background-color:  ${(props) => props.theme.badgeBg.color};
`;

const CreatedBy = styled.p`
  color: ${(props) => props.theme.gray.color};
  font-size: 0.3em;
  margin-left: 1em;
`;

const Message = styled.div`
  padding: 0.5em;
  text-align: end;
  font-family: ${(props) => props.theme.fontKor};
`;

const H3 = styled.h3`
  font-size: 3em;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  margin-bottom: 0;
`;

const Text = styled.p`
  font-size: 0.9em;
  color: ${(props) => props.theme.darkGray.color};
`;

const Category = styled(Toggle)`
  margin: auto;
  font-size: 0.5em;
  background-color: ${(props) => props.theme.yellow.color};
  box-shadow: inset 0px 0px 11px rgba(0, 0, 0, 0.15);
`;

const QuizBox = styled.li`
  margin-bottom: 1em;
  padding: 0.3em;
`;

const Question = styled.div`
  margin-top: 0.5em;
  color: ${(props) => props.theme.lightFont.color};
`;

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
