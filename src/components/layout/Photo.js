import { useState } from "react";
import { useRouter } from "next/router";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import styled from "styled-components";

import fetchData from "@/utils/fetchData";
import StyledButton from "@/components/common/StyledButton";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

const ImagePreview = styled.img`
  width: 100vw;
  height: 100vh;
`;

const ToggleButton = styled(StyledButton)`
  position: absolute;
  top: 3vh;
  left: 3vw;
  color: ${(props) => props.theme.primary.color};
  background-color: ${(props) => props.theme.white.color};
`;

const Message = styled.div`
  width: 100%;
  position: fixed;
  top: 40vh;
  text-align: center;
  font-size: 10vw;
  color: ${(props) => props.theme.primary.color};
  background-color: ${(props) => props.theme.white.color};
  z-index: 2;
`;

function Photo({ isMobile, idealResolution, onClick }) {
  const [dataUri, setDataUri] = useState("");
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  async function handleTakePhoto(uri) {
    console.log("takePhoto");
    setDataUri(uri);

    const response = await fetchData("POST", "/api/photo", uri);

    if (response.result) {
      router.push(`/search/${response}`);
      return;
    }

    setIsError(true);

    setTimeout(() => {
      setDataUri("");
      setIsError(false);
    }, 1000);
  }

  return (
    <Container>
      <ToggleButton onClick={onClick}>X</ToggleButton>
      {isError && <Message>TRY AGAIN!</Message>}
      {
        (dataUri)
          ? <ImagePreview src={dataUri} alt="photo by user" />
          : (
            <Camera
              onTakePhotoAnimationDone={handleTakePhoto}
              isImageMirror={false}
              idealFacingMode={FACING_MODES.ENVIRONMENT}
              isFullscreen={isMobile}
              imageCompression={0.9}
              // isMaxResolution={false}
              sizeFactor={0.9}
              imageType={IMAGE_TYPES.JPG}
              isDisplayStartCameraError={false}
              idealResolution={idealResolution}
            />
          )
      }
    </Container>
  );
}

export default Photo;
