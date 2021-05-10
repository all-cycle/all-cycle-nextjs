import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  width: 80vw;
  max-width: 640px;
  margin: auto;
  overflow: hidden;
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
`;

const Wrapper = styled.a`
  width: 100%;
  cursor: pointer;
`;

const IMG = styled.img`
  border-radius: 2vw;
`;

const ImgTitle = styled.div`
  position: absolute;
  top: 1.5vh;
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  padding: 0.5rem;
  color: ${(props) => props.theme.white.color};
  background-color: ${(props) => props.theme.lightGreen.color};
`;

function Slider({
  list,
  slideRef,
}) {
  return (
    <Container>
      <SliderContainer ref={slideRef}>
        {list.map((letter) => {
          const { href, src, title } = letter;

          return (
            <Link key={href} href={href} passHref>
              <Wrapper>
                <IMG
                  src={src}
                  alt={title.slice(13)}
                />
                <ImgTitle>{title}</ImgTitle>
              </Wrapper>
            </Link>
          );
        })}
      </SliderContainer>
    </Container>
  );
}

export default Slider;
