import { getAllLetterList } from "@/utils/letterAPI";
import LetterContainer from "@/components/layout/webLetter";
import {
  Container,
  ToggleContainer,
  Toggle,
} from "@/components/layout/webLetter/styled";

export default function WebLetter({ letters }) {
  return (
    <Container>
      <ToggleContainer>
        <Toggle>
          <a href="http://ecoseoul.or.kr/">@서울환경연합</a>
        </Toggle>
      </ToggleContainer>

      <LetterContainer letters={letters} />
    </Container>
  );
}

export async function getStaticProps() {
  const letters = getAllLetterList([
    "slug",
    "href",
    "title",
    "img",
  ]);

  return {
    props: { letters },
    revalidate: 60 * 60 * 1000 * 7,
  };
}
