import styled from "styled-components";
import {
  faPrescriptionBottle,
  faBrain,
  faBusAlt,
} from "@fortawesome/free-solid-svg-icons";

import StyledIcon from "@/components/common/StyledIcon";

const Container = styled.div`
`;

const Category = styled.div`
`;

const QuizCard = styled.article`
`;

const Title = styled.dt`
`;

const Examples = styled.dd``;

const Description = styled.div`
`;

function Quiz() {
  // 로그인 안했으면 로그인 하도록 redirect
  const BADGE_TYPE = [];

  return (
    <Container>
      <Category>
        <StyledIcon icon={faPrescriptionBottle} />
      </Category>
    </Container>
  );
}

export default Quiz;
