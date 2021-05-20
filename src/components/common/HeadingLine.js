import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100%;
  max-height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  font-weight: 600;
  color: ${(props) => props.theme.white.color};

  &:hover {
    transition: all 0.3s ease-in-out;
    width: 90vw;
  }
`;

const Arrow = styled(FontAwesomeIcon)`
  font-size: 13vw;
`;

const Title = styled.span`
  font-size: 1.2em;
`;

function HeadingLine({ title }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Arrow icon={faCaretRight} />
    </Container>
  );
}

export default HeadingLine;
