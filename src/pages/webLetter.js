import axios from "axios";
import cheerio from "cheerio";
import styled from "styled-components";
import fs from "fs";
// import imageToBase64 from "image-to-base64";
import base64Img from "base64-img";

import ImageContainer from "@/components/common/ImageContainer";
import NextLink from "@/components/common/NextLink";
import EcoSeoulLogo from "@/components/common/EcoSeoulLogo";
import { useEffect } from "react";
import imageToBase64 from "image-to-base64";

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
  // const url = "http://ecoseoul.or.kr/wp/wp-content/themes/ecoseoul/images/ecoseoul.png";

  if (!letters) {
    return <div>아직 로딩중</div>;
  }

  console.log(letters);

  return (
    <Container>
      {/* 환경연합 링크 */}
      <EcoSeoulLogo />
      <LetterContainer>
        {letters.map((letter) => {
          const { href, title, src } = letter;

          return (
            <NextLink key={href} href={href}>
              <LetterBox>
                <LetterImageContainer>
                  <Image
                    src={`data:image/png;base64,${src}`}
                    alt={title.slice(13)}
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

  const letters = [];

  $bodyList.each(async (i, elem) => {
    const { title } = elem.attribs;
    const { href } = elem.attribs;
    const src = $(elem).find("img").attr("src");

    const encode = await imageToBase64(encodeURI(src));

    // fs.writeFile(`/Users/soyoon/Documents/programming/2th/all-cycle/src/constants/${title}.js`,
    //   encode, (err) => {
    //     if (err) {
    //       console.log(err.message);
    //       return;
    //     }
    //   });

    letters.push({
      href,
      title,
      src: encode,
    });
    console.log(letters);
  });

  return {
    props: { letters }, // will be passed to the page component as props
    revalidate: 60 * 60 * 1000 * 7,
  };
}
