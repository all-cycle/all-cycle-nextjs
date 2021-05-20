import { useState } from "react";
import styled from "styled-components";

import useWindowSize from "@/hooks/useWindowSize";
import Photo from "@/components/layout/Photo";
import AnimationCamera from "@/components/layout/AnimationCamera";

const Container = styled.div`
  text-align: center;
`;

function MainCamera() {
  const { isMobile, idealResolution } = useWindowSize();
  const [startCamera, setStartCamera] = useState(false);

  function handleStartCamera() {
    setStartCamera((prev) => !prev);
  }

  return (
    <Container>
      {startCamera
        ? (
          <Photo
            isMobile={isMobile}
            idealResolution={idealResolution}
            onClick={handleStartCamera}
          />
        )
        : (
          <AnimationCamera onClick={handleStartCamera} />
        )}
    </Container>
  );
}

export default MainCamera;
