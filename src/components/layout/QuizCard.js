import styled from "styled-components";
import { faBrain, faBusAlt } from "@fortawesome/free-solid-svg-icons";

import StyledIcon from "@/components/common/StyledIcon";

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & + & {
    margin-top: 1em;
  }
`;

const BadgeContainer = styled.span`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.graishGreen.color};
`;

const Title = styled.dt`
`;

const Examples = styled.dd`
`;

const Description = styled.div`
`;

function QuizCard({ quiz }) {
  return (
    <Container>
      <h3>플라스틱</h3>
      <BadgeContainer>
        <StyledIcon icon={faBusAlt} size="2x" color="white" />
      </BadgeContainer>
    </Container>
  );
}

export default QuizCard;
