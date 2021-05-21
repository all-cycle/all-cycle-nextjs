// import axios from "axios";
import fetch from "node-fetch";
import cheerio from "cheerio";
import imgDownload from "image-downloader";
import styled from "styled-components";

import ImageContainer from "@/components/common/StyledImageContainer";
import NextLink from "@/components/common/NextLink";

const Container = styled.div`
  font-family: ${(props) => props.theme.fontKor};
`;

const Toggle = styled.span`
  padding: 0.5em 1em;
  border-radius: 2vw;
  font-size: 0.7em;
  color: ${(props) => props.theme.white.color};
  background-color: ${(props) => props.theme.gray.color};
  box-shadow: 0px 5px 11px rgba(0, 0, 0, 0.15);

  &:hover {
    color: ${(props) => props.theme.gray.color};
    background-color: ${(props) => props.theme.primary.color};
  }
`;

const ToggleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 1em;
`;

const LetterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  gap: 1em;
  padding: 1em;
`;

const LetterBox = styled.article`
  width: 100%;
  display: flex;
  margin: auto;
  margin-bottom: 1vh;
  border-radius: 5vw;
  background-color: ${(props) => props.theme.lightGray.color};
  box-shadow: 0px 5px 11px rgba(0, 0, 0, 0.15);
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
  padding: 1em 0.2EM;
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
  word-spacing: 1px;
  line-height: 2em;
`;

export default function WebLetter({ letters }) {
  if (!letters.length) {
    return <div>아직 로딩중</div>;
  }

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

          return (
            <NextLink key={href} href={href}>
              <LetterBox>
                <LetterImageContainer>
                  <Image
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
  const response = await fetch("http://ecoseoul.or.kr/archives/category/%ec%9e%90%eb%a3%8c/webletter");
  const html = await response.text();

  const $ = cheerio.load(html);
  const $bodyList = $("ul.cat-list > li").children("a");
  console.log("axios cheerio load", $bodyList);

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
