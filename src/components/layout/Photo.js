import { useEffect, useState } from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import styled, { css } from "styled-components";

import fetchData from "@/utils/fetchData";

const Container = styled.div`
`;

function Photo({ isMobile, idealResolution }) {
  const [dataUri, setDataUri] = useState("");

  async function handleTakePhoto(uri) {
    console.log("takePhoto");
    setDataUri(uri);

    const data = await fetchData("POST", "/api/photo", uri);

    console.log(data);
  }

  return (
    <Container>
      <Camera
        onTakePhotoAnimationDone={handleTakePhoto}
        isImageMirror={false}
        idealFacingMode={FACING_MODES.ENVIRONMENT}
        isFullscreen={isMobile}
        imageCompression={0.9}
        isMaxResolution={false}
        sizeFactor={0.9}
        imageType={IMAGE_TYPES.JPG}
        isDisplayStartCameraError={false}
        idealResolution={idealResolution}
      />
      <img src={dataUri} alt="hi" style={{ width: "100px", height: "80px" }} />
    </Container>
  );
}

export default Photo;
