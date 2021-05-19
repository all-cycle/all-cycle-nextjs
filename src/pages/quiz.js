import { useSession } from "next-auth/client";
import Image from "next/image";
import styled from "styled-components";

import { getAllQuizList } from "@/utils/quizAPI";
import NextLink from "@/components/common/NextLink";
import AccessDenied from "@/components/common/AccessDenied";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 150px;
  align-content: center;
  justify-content: center;
  padding: 0.5em;
  gap: 0.3em;
  font-size: 10vw;
  background-color: green;
`;

const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
`;

function Quiz({ allQuizList }) {
  const [session, loading] = useSession();

  if (!session && loading) {
    return <AccessDenied />;
  }

  return (
    <Container>
      {allQuizList.map((quiz) => (
        <BadgeContainer key={quiz.slug}>
          <NextLink href={`/_quiz/${quiz.slug}`} as={`/quiz/${quiz.slug}`}>
            <Image
              src={`/badges/${quiz.slug}.png`}
              alt="Flower pot Badge"
              width={100}
              height={100}
            />
          </NextLink>
        </BadgeContainer>
      ))}
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
