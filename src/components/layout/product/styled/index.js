import styled, { css } from "styled-components";

import NextLink from "@/components/element/NextLink";

const Container = styled.div`
  margin: 0;
  padding-top: 0.3em;
  padding-bottom: 30px;
`;

const ProductContainer = styled.div`
  padding: 3vw;

  border-top: 3px solid ${(props) => props.theme.lightGray.color};
`;

const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 3vw;
  box-shadow: 0px 5px 11px rgba(0, 0, 0, 0.15);
  margin-bottom: 1em;
`;

const ProductInfo = styled.div`
  width: 100%;
  position: relative;
  padding: 3vw;

  background-color: ${(props) => props.theme.lightGray.color};
`;

const ProductName = styled.div`
  color: ${(props) => props.theme.darkGray.color};
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const colorTheme = css`
  ${({ isEven }) => {
    if (isEven) {
      return css`
        color: ${(props) => props.theme.darkGray.color};
        background-color: ${(props) => props.theme.lightGray.color};
      `;
    }

    return css`
      color: ${(props) => props.theme.darkGray.color};
      background-color: ${(props) => props.theme.badgeBg.color};;
    `;
  }}
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 17vh;
  border-bottom: 2px solid ${(props) => props.theme.lightGray.color};
  font-family: ${(props) => props.theme.fontKor};
  padding: 0.7em;
  padding-left: 10vw;

  ${colorTheme}
`;

const InfoContainer = styled.dl`
  width: 70vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 1em;
`;

const ItemImage = styled.img`
  height: 100%;
  border-radius: 2vw;
`;

const Name = styled.span`
  margin: 0;
  padding: 0;
  font-size: 0.8em;
  font-weight: 600;

  ${colorTheme}
`;

const Form = styled.form`
  width: 90%;
  height: 5vh;
  display: flex;
  align-items: center;
  margin: auto;
  padding-left: 2vw;
  border-radius: 2vw;
  background-color: ${(props) => props.theme.lightGray.color};
`;

const Input = styled.input`
  all: unset;
  width: 100%;

  ::placeholder {
    color: ${(props) => props.theme.gray.color};
  }
`;

export {
  Container,
  NextLink,
  ProductContainer,
  Picture,
  ProductInfo,
  ProductName,
  Section,
  ItemImage,
  InfoContainer,
  Name,
  Form,
  Input,
};
