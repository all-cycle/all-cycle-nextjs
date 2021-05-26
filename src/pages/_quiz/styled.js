import styled from "styled-components";

import AnswerModal from "@/components/layout/AnswerModal";
import Toggle from "@/components/element/Toggle";
import StyledModal from "@/components/element/StyledModal";

const Container = styled.section`
width: 100%;
margin-top: 1.5em;
`;

const Question = styled.div`
padding: 1em;
font-size: 1.1em;
border-radius: 2vw;
border: 1px solid ${(props) => props.theme.green.color};

margin: 1em;
margin-bottom: auto;
`;

export {
  Container,
  Question,
  Toggle,
  AnswerModal,
  StyledModal,
};
