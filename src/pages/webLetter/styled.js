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

export {
  Container,
  ToggleContainer,
  Toggle,
};
