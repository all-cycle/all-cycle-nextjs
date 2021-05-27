import styled, { css } from "styled-components";

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

const Container = styled.section`
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

const Title = styled.dd`
  all: unset;
  font-size: 0.5em;
`;

const Number = styled.span`
  color: ${(props) => props.theme.gray.color};
`;

const ScoreFigure = styled.figure`
  all: unset;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;

  & + & {
    margin-top: 0.5em;
  }
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
  ItemImage,
  InfoContainer,
  Name,
  ScoreFigure,
  Number,
  Title,
  Form,
  Input,
};
