import { getAllLetterList } from "@/utils/letterAPI";
import {
  Container,
  ToggleContainer,
  Toggle,
  LetterContainer,
  LetterBox,
  LetterImageContainer,
  Image,
  LetterTitle,
  Strong,
  Plain,
  NextLink,
} from "./styled";

export default function WebLetter({ letters }) {
  return (
    <Container>
      <ToggleContainer>
        <Toggle>
          <a href="http://ecoseoul.or.kr/">
            @서울환경연합
          </a>
        </Toggle>
      </ToggleContainer>
      <LetterContainer>
        {letters.map((letter) => {
          const { href, title, img } = letter;
          const titleIndex = title.indexOf("]") + 1;

          return (
            <NextLink key={href} href={href}>
              <LetterBox>
                <LetterImageContainer>
                  <Image
                    src={img}
                    alt={title}
                    width={250}
                    height={200}
                  />
                </LetterImageContainer>
                <LetterTitle>
                  <Strong>{title.slice(0, titleIndex)}</Strong>
                  <Plain>{title.slice(titleIndex)}</Plain>
                </LetterTitle>
              </LetterBox>
            </NextLink>
          );
        })}
      </LetterContainer>
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
