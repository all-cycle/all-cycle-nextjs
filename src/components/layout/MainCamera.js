import { useState } from "react";
import styled from "styled-components";

import useWindowSize from "@/hooks/useWindowSize";
import Photo from "@/components/layout/Photo";
import AnimationCamera from "@/components/layout/AnimationCamera";

const Container = styled.div`
  text-align: center;
`;

function MainCamera() {
  const { idealResolution } = useWindowSize();
  const [startCamera, setStartCamera] = useState(false);

  function toggleCamera() {
    setStartCamera((prev) => !prev);
  }

  return (
    <Container>
      {startCamera
        ? (
          <Photo
            idealResolution={idealResolution}
            handleClose={toggleCamera}
          />
        )
        : (
          <AnimationCamera onClick={toggleCamera} />
        )}
    </Container>
  );
}

export default MainCamera;
