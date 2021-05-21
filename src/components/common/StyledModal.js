import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: -10vh;
  left: 0;
  width: 100%;
  height: 100%;
  top: 10%;
  display: flex;
  flex-direction: column;
  padding: 1em 2em;
  background-color: ${(props) => props.color || props.theme.lightGray.color};
  z-index: 10;
`;

function StyledModal({ children }) {
  return (
    <ModalContainer>
      {children}
    </ModalContainer>
  );
}

export default StyledModal;
