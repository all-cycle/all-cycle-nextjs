import styled from "styled-components";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import { getAllQuizList } from "@/utils/quizAPI";
import LinkIcon from "@/components/common/LinkIcon";

import QuizCard from "@/components/layout/QuizCard";
import NextLink from "@/components/common/NextLink";

const Container = styled.div`
  width: 100%;
  height: 50vh;
  padding: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BadgeContainer = styled.div`
  width: 50vw;
  height: 10vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 10vw;
  background-color: gray;
`;

function Quiz({ allQuizList }) {
  // 로그인 안했으면 로그인 하도록 redirect

  return (
    <Container>
      <BadgeContainer>
        <LinkIcon
          href="/_quiz/glass1"
          iconName={faHome}
          size="8vw"
        />
        <LinkIcon
          href="/_quiz"
          iconName={faHome}
          size="8vw"
        />
        <LinkIcon
          href="/_quiz"
          iconName={faHome}
          size="8vw"
        />
      </BadgeContainer>
      <BadgeContainer>
        <LinkIcon
          href="/_quiz"
          iconName={faHome}
          size="8vw"
        />
        <LinkIcon
          href="/_quiz"
          iconName={faHome}
          size="8vw"
        />
        <LinkIcon
          href="/_quiz"
          iconName={faHome}
          size="8vw"
        />
      </BadgeContainer>
    </Container>
  );
}

export default Quiz;

export async function getStaticProps() {
  const allQuizList = getAllQuizList([
    "question",
    "examples",
    "answer",
    "description",
    "category",
  ]);

  return {
    props: { allQuizList },
  };
}
