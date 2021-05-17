import axios from "axios";
import cheerio from "cheerio";
import styled from "styled-components";

import ImageContainer from "@/components/common/ImageContainer";
import NextLink from "@/components/common/NextLink";

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
      <a href="http://ecoseoul.or.kr/">
        <EcoSeoulLogo>
          <LogoImage
            src="http://ecoseoul.or.kr/wp/wp-content/themes/ecoseoul/images/ecoseoul.png"
            alt="ecoSeoul"
          />
          <LogoImage
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAA0CAYAAADWg5laAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzgxMkE5NEY2ODcwMTFFMzg3OEY5QTQ1RTc4MDgyNDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzgxMkE5NTA2ODcwMTFFMzg3OEY5QTQ1RTc4MDgyNDciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3ODEyQTk0RDY4NzAxMUUzODc4RjlBNDVFNzgwODI0NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3ODEyQTk0RTY4NzAxMUUzODc4RjlBNDVFNzgwODI0NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvUBTMgAACe8SURBVHja7H0HeFTV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"
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
            <NextLink key={href} href={href}>
              <LetterBox>
                <LetterImageContainer>
                  <Image
                    referrerPolicy="no-referrer"
                    src={src}
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
