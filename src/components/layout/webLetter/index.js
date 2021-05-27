import {
  Container,
  LetterBox,
  LetterImageContainer,
  Image,
  LetterTitle,
  Strong,
  Plain,
  NextLink,
} from "./styled";

function WebLetter({ letters }) {
  return (
    <Container>
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
    </Container>
  );
}

export default WebLetter;
