import Link from "next/link";
import cheerio from "cheerio";
import styled from "styled-components";

import ImageContainer from "@/components/common/ImageContainer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EcoSeoulLogo = styled.div`
  padding: 2vw;
  border-radius: 2vw;
  background-color: ${(props) => props.theme.green.color};
`;

const LogoImage = styled.img`
  width: 20%;
`;

const LetterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3vh;
`;

const LetterBox = styled.div`
  width: 90%;
  display: flex;
  border-radius: 5vw;
  background-color: ${(props) => props.theme.lightGray.color};

  & + & {
    margin-top: 10px;
  }
`;

const LetterImageContainer = styled(ImageContainer)`
  height: 20vh;
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 5vw;
  border-bottom-left-radius: 5vw;
`;

const LetterTitle = styled.div`
  flex-basis: 50%;
  padding: 1em;
  overflow: hidden;
`;

const Strong = styled.div`
  font-size: 2vw;
  padding: 1em;
`;

const Plain = styled.div`
  border-radius: 2vw;
  padding: 0.5em;
  font-size: 3vw;
  background-color: ${(props) => props.theme.white.color};
`;

export default function WebLetter({ letters }) {
  return (
    <Container>
      {/* 환경연합 링크 */}
      <a href="http://ecoseoul.or.kr/">
        <EcoSeoulLogo>
          <LogoImage
            src="http://ecoseoul.or.kr/wp/wp-content/themes/ecoseoul/images/ecoseoul.png"
            alt="ecoSeoul"
          />
        </EcoSeoulLogo>
      </a>

      <LetterContainer>
        {letters.map((letter) => {
          const {
            href,
            title,
            src,
          } = letter;

          return (
            <Link key={href} href={href}>
              <LetterBox>
                <LetterImageContainer>
                  <Image src={src} alt={title.slice(13)} />
                </LetterImageContainer>
                <LetterTitle>
                  <Strong>{title.slice(0, 13)}</Strong>
                  <Plain>{title.slice(13)}</Plain>
                </LetterTitle>
              </LetterBox>
            </Link>
          );
        })}
      </LetterContainer>
    </Container>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://ecoseoul.or.kr/archives/category/%ec%9e%90%eb%a3%8c/webletter");
  const html = await res.text();
  const $ = cheerio.load(html);
  const $bodyList = $("ul.cat-list > li").children("a");

  const letters = [];

  $bodyList.each((i, elem) => {
    const { title } = elem.attribs;
    const { href } = elem.attribs;
    const src = $(elem).find("img").attr("src");

    letters.push({
      href,
      title,
      src,
    });
  });

  return {
    props: { letters }, // will be passed to the page component as props
    revalidate: 60 * 60 * 1000 * 7,
  };
}
