import styled from "styled-components";

import Logo from "../components/layout/Logo";
import Slider from "../components/layout/Layout";
import useSlider from "../util/hooks/useSlider";

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
