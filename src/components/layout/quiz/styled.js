import styled from "styled-components";

import NextLink from "@/components/element/NextLink";
import StyledButton from "@/components/element/StyledButton";
import ToggleButton from "@/components/element/ToggleButton";
import ButtonContainer from "@/components/element/ButtonContainer";

const Container = styled.section`
  width: 100%;
  padding: 0.5em 1em;
`;

const OptionList = styled.ul`
`;

const Option = styled.li`
  & + & {
    margin-top: 0.3em;
  }
`;

const OptionButton = styled(StyledButton)`
  border: 1px solid ${(props) => props.theme.green.color};
  color: ${(props) => props.theme.white.color};
  background-color: ${(props) => props.theme.primary.color};
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.15);
`;

const Picture = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4vw;
`;

const Caption = styled.figcaption`
  all: unset;
  position: fixed;
  padding: 0.3em 0.5em;
  font-size: 0.7em;
  font-weight: 600;
  text-align: start;
  border: 1px solid ${(props) => props.theme.green.color};
  border-bottom-right-radius: 0.5em;
  color: ${(props) => props.theme.green.color};
  background-color: ${(props) => props.theme.white.color};
  z-index: 1;

  &:hover {
    color: ${(props) => props.theme.primary.color};
    border: 1px solid ${(props) => props.theme.primary.color};
  }
`;

const ImageOptionList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 120px);
  grid-template-rows: repeat(auto, 110px);
  gap: 0.5em;
  justify-content: center;
`;

const ImageOption = styled.li`
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => props.theme.green.color};
  padding: 0.4em;
  border-radius: 2vw;

  &:hover {
    background-color: ${(props) => props.theme.primary.color};
  }
`;

const AnswerButton = styled(ToggleButton)`
  border: none;
  font-size: 1em;
  color: ${(props) => props.theme.white.color};
  background-color: ${(props) => props.theme.lightFont.color};
`;

const Message = styled.div`
  height: 3vh;
  margin: 0.5em;
  margin-bottom: 0.5em;
  text-align: end;
`;

const QuizContainer = styled.ul`
  width: 100%;
  margin-top: 3.5em;
  padding: 0.5em;
  gap: 0.3em;
  font-size: 1em;
  background-color: ${(props) => props.theme.badgeBg.color};
`;

const QuizBox = styled.li`
  margin-bottom: 1em;
  padding: 0.3em;
`;

const Category = styled(ToggleButton)`
  margin: auto;
  font-size: 0.5em;
  color: ${(props) => props.theme.primary.color};
  background-color: ${(props) => props.theme.lightGray.color};
`;

const Question = styled(ToggleButton)`
  margin: auto;
  margin-top: 0.5em;
  padding: 0.5em 1em;
  border: none;
  text-align: start;
  color: ${(props) => props.theme.lightFont.color};
  font-size: 0.8em;
  font-family: ${(props) => props.theme.fontEng};
  background-color: ${(props) => props.theme.white.color};
  box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.15);
`;

export {
  Container,
  Message,
  AnswerButton,
  OptionList,
  Option,
  Caption,
  OptionButton,
  ImageOptionList,
  ImageOption,
  Picture,
  QuizContainer,
  QuizBox,
  Category,
  Question,
  NextLink,
  ButtonContainer,
};
