import styled from "styled-components";

import Logo from "../components/Logo";
import Slider from "../components/Slider";
import useSlider from "../hooks/useSlider";

const Container = styled.div`
`;

export default function Main() {
  const {
    letters,
    slideRef,
  } = useSlider();

  return (
    <Container>
      <Logo />
      {letters.length > 0 && (
        <Slider
          list={letters}
          slideRef={slideRef}
        />
      )}
    </Container>
  );
}
