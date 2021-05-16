import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";

import useWindowSize from "@/hooks/useWindowSize";
import Photo from "@/components/layout/Photo";
import StyledButton from "@/components/common/StyledButton";

const Container = styled.div`
  height: 30vh;
  max-height: 30vh;
  text-align: center;
`;

function AnimationCamera() {
  const [startCamera, setStartCamera] = useState(false);
  const { isMobile, idealResolution } = useWindowSize();

  function handleStartCamera() {
    setStartCamera((prev) => !prev);
  }

  return (
    <Container>
      <StyledButton onClick={handleStartCamera}>X</StyledButton>
      {startCamera
        ? (
          <Photo
            isMobile={isMobile}
            idealResolution={idealResolution}
            onClick={handleStartCamera}
          />
        )
        : (
          <FontAwesomeIcon
            icon={faCameraRetro}
            size="3x"
            onClick={handleStartCamera}
          />
        )}
    </Container>
  );
}

export default AnimationCamera;
