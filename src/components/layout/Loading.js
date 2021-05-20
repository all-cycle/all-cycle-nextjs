import styled, { keyframes } from "styled-components";
import { faRecycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.white.color};
  z-index: 10;
`;

const rotate = keyframes`
  50% {
    transform: rotateZ(360deg);
  }
  100% {
    transform: rotateZ(720deg);
  }
`;

const RecycleMark = styled.div`
  color: ${(props) => props.theme.skyblue.color};
  animation: ${rotate} 3s infinite cubic-bezier(0.3, 0, 0.8, 1);
  z-index: 10;
`;

function Loading() {
  return (
    <Container>
      <RecycleMark>
        <FontAwesomeIcon icon={faRecycle} size="5x" />
      </RecycleMark>
    </Container>
  );
}

export default Loading;
