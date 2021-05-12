import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 110vw;
  max-height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1em;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.white.color};
  background-color: ${(props) => props.theme.primary.color};

  &:hover {
    transition: all 0.3s ease-in-out;
    width: 90vw;
  }
`;

const Arrow = styled(FontAwesomeIcon)`
  position: absolute;
  right: 1vw;
  color: ${(props) => props.theme.primary.color};
  font-size: 15vw;
`;

function HeadingLine({ title }) {
  return (
    <Container>
      <h3>{title}</h3>
      <Arrow icon={faCaretRight} />
    </Container>
  );
}

export default HeadingLine;
