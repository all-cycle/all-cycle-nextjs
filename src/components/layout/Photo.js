import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import styled from "styled-components";

import StyledButton from "@/components/element/StyledButton";
import Loading from "@/components/layout/Loading";
import FindIt from "@/components/layout/FindIt";
import usePhoto from "@/hooks/usePhoto";

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
  z-index: 2;
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

function Photo({ idealResolution, handleClose }) {
  const {
    startedCamera,
    isError,
    detectedText,
    dataUri,
    handleTakePhoto,
    handleStart,
  } = usePhoto(handleClose);

  return (
    <Container>
      {startedCamera && <Loading />}
      {detectedText && <FindIt detected={detectedText} />}
      {isError && <Message>TRY AGAIN!</Message>}
      {
        (dataUri)
          ? <ImagePreview src={dataUri} alt="photo by user" />
          : (
            <>
              <ToggleButton onClick={handleClose}>X</ToggleButton>
              <Camera
                onTakePhotoAnimationDone={handleTakePhoto}
                isImageMirror={false}
                idealFacingMode={FACING_MODES.ENVIRONMENT}
                isFullscreen
                imageCompression={0.9}
                sizeFactor={0.9}
                imageType={IMAGE_TYPES.JPG}
                isDisplayStartCameraError={false}
                idealResolution={idealResolution}
                onCameraStart={handleStart}
              />
            </>
          )
      }
    </Container>
  );
}

export default Photo;
