import styled, { keyframes } from "styled-components";

import NextLink from "@/components/element/NextLink";

const Container = styled.div`
  width: 1500px;
  margin: auto;
`;

const scroll = keyframes`
  0% {
    transform: translateX(0);
   }
	100% {
    transform: translateX(calc(-100px * 8));
  }
`;

const SliderContainer = styled.div`
  width: calc(100px * 16);
  position: relative;
  display: flex;
  animation: ${scroll} 20s linear infinite;
  overflow: hidden;
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100%;

  &:hover {
    transform: scale(1.2);
  }
`;

const ImageContainer = styled.div`
  flex-basis: 50%;
  height: 12vh;
  object-fit: cover;
  border-top-left-radius: 5vw;
  border-bottom-left-radius: 5vw;

  /* NOTE 사진에서도 text-align 먹히는지 확인 */
  text-align: center;
  &:hover {
    transform: scale(1.2);
  }
`;

function Slider({ list }) {
  const carouselList = list.concat(list[0]);

  return (
    <Container>
      <SliderContainer>
        {carouselList.map((letter) => {
          const { _id, imgUrl, imgAlt } = letter;

          return (
            <NextLink key={_id + Math.random(2)} href={`/product/${_id}`}>
              <ImageContainer>
                <ItemImage src={imgUrl} alt={imgAlt} />
              </ImageContainer>
            </NextLink>
          );
        })}
      </SliderContainer>
    </Container>
  );
}

export default Slider;
