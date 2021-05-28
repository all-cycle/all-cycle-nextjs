import styled from "styled-components";

import ImageContainer from "@/components/element/StyledImageContainer";
import NextLink from "@/components/element/NextLink";

const Container = styled.div`
  font-family: ${(props) => props.theme.fontKor};
`;

const Toggle = styled.span`
  padding: 0.5em 1em;
  border-radius: 2vw;
  font-size: 0.7em;
  color: ${(props) => props.theme.white.color};
  background-color: ${(props) => props.theme.gray.color};
  box-shadow: 0px 5px 11px rgba(0, 0, 0, 0.15);

  &:hover {
    color: ${(props) => props.theme.gray.color};
    background-color: ${(props) => props.theme.primary.color};
  }
`;

const ToggleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 1em;
  padding-top: 0.5em;
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  gap: 1em;
  padding: 1em;
`;

const LetterBox = styled.article`
  width: 100%;
  display: flex;
  margin: auto;
  margin-bottom: 1vh;
  border-radius: 5vw;
  background-color: ${(props) => props.theme.lightGray.color};
  box-shadow: 0px 5px 11px rgba(0, 0, 0, 0.15);
`;

const LetterImageContainer = styled(ImageContainer)`
  height: 20vh;
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 5vw;
  border-bottom-left-radius: 5vw;
`;

const LetterTitle = styled.div`
  flex-basis: 50%;
  padding: 1em 0.2EM;
  overflow: hidden;
`;

const Strong = styled.div`
  font-size: 2vw;
  padding: 1em;
`;

const Plain = styled.div`
  border-radius: 2vw;
  padding: 0.5em;
  font-size: 3vw;
  word-spacing: 1px;
  line-height: 2em;
`;

export {
  Container,
  ToggleContainer,
  Toggle,
  ListContainer,
  LetterBox,
  LetterImageContainer,
  Image,
  LetterTitle,
  Strong,
  Plain,
  NextLink,
};
