import markdownToHtml from "@/utils/markdownToHtml";
import { getAllQuizList, getQuizBySlug } from "@/utils/quizAPI";

function Quiz({ quiz }) {
  const {
    question,
    answer,
    description,
    examples,
    category,
  } = quiz;

  return (
    <div>
      <h3>{category}</h3>
      <h2>{question}</h2>
      {examples && (
        examples.map((example, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>{example}</div>
        ))
      )}
      <div>{answer}</div>
      <div>{description}</div>
    </div>
  );
}

export default Quiz;

export async function getStaticProps({ params }) {
  const quiz = getQuizBySlug(params.slug, [
    "question",
    "answer",
    "description",
    "examples",
    "category",
  ]);

  const content = await markdownToHtml(quiz.content || "");

  return {
    props: {
      quiz: {
        ...quiz,
        content,
      },
    },
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
