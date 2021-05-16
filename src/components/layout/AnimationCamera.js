import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";

import useWindowSize from "@/hooks/useWindowSize";
import Photo from "@/components/layout/Photo";

const Container = styled.div`
  text-align: center;
`;

function AnimationCamera() {
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
