import axios from "axios";
import cheerio from "cheerio";
import imgDownload from "image-downloader";
import styled from "styled-components";

import EcoSeoulLogo from "@/components/common/EcoSeoulLogo";
import ImageContainer from "@/components/common/StyledImageContainer";
import NextLink from "@/components/common/NextLink";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LetterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3vh;
`;

const LetterBox = styled.article`
  width: 90%;
  display: flex;
  margin: auto;
  margin-bottom: 1vh;
  border-radius: 5vw;
  background-color: ${(props) => props.theme.lightGray.color};
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
  if (!letters) {
    return <div>아직 로딩중</div>;
  }

  return (
    <Container>
      {/* 환경연합 링크 */}
      <EcoSeoulLogo />
      <LetterContainer>
        {letters.map((letter) => {
          const { href, title, img } = letter;

          return (
            <NextLink key={href} href={href}>
              <LetterBox>
                <LetterImageContainer>
                  <Image
                    // src={`/_assets/${title.slice(7, 10)}.jpg`}
                    src={img}
                    alt={title.slice(13)}
                    width={200}
                    height={200}
                  />
                </LetterImageContainer>
                <LetterTitle>
                  <Strong>{title.slice(0, 13)}</Strong>
                  <Plain>{title.slice(13)}</Plain>
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
  const html = await axios.get("http://ecoseoul.or.kr/archives/category/%ec%9e%90%eb%a3%8c/webletter");
  const $ = cheerio.load(html.data);
  const $bodyList = $("ul.cat-list > li").children("a");

  // NOTE 비동기처리를 해서 아랫부분이 먼저 실행되버리게 하다니이이이!
  const letterScraps = $bodyList.map(async (i, elem) => {
    const { title, href } = elem.attribs;
    const src = $(elem).find("img").attr("src");
    const url = encodeURI(src);

    await imgDownload.image({
      url,
      dest: `${process.cwd()}/public/_assets/${title.slice(7, 10)}.jpg`,
    });

    return {
      href,
      title,
      img: `/_assets/${title.slice(7, 10)}.jpg`,
    };
  });

  const letters = await Promise.all(letterScraps);

  return {
    props: { letters }, // will be passed to the page component as props
    revalidate: 60 * 60 * 1000 * 7,
  };
}
