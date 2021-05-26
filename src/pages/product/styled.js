import styled, { css } from "styled-components";
import NextLink from "@/components/element/NextLink";

const Container = styled.div`
  margin: 0;
  padding-top: 0.3em;
  padding-bottom: 30px;
`;

const color = css`
  ${({ isclicked }) => {
    if (isclicked) {
      return css`
      color: ${(props) => props.theme.white.color};
      background-color: ${(props) => props.theme.primary.color};
    `;
    }

    return css`
    color: ${(props) => props.theme.primary.color};
    background-color: ${(props) => props.theme.white.color};
  `;
  }}
`;

const ToggleButton = styled.button`
  border: 1px solid ${(props) => props.theme.primary.color};
  border-radius: 10px;
  padding: 0.5em 2em;
  font-size: 0.3em;
  margin: 0.5em;

  ${color}
`;

const FilterContainer = styled.div`
  padding: 1em;
  margin-left: 2em;
`;

const FilterName = styled.span`
  display: inline-block;
  width: 15vw;
  font-size: 0.4em;
  font-weight: 400;
  color: ${(props) => props.theme.gray.color};
`;

const InitButton = styled(ToggleButton)`
  color: ${(props) => props.theme.gray.color};
  border: 1px solid ${(props) => props.theme.gray.color};

  &:hover {
    transition: all 0.3s ease-in-out;
    color: ${(props) => props.theme.white.color};
    background-color: ${(props) => props.theme.gray.color};
  }
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

const Title = styled.div`
  font-size: 0.7em;
  margin: 0.5em;
  color: ${(props) => props.theme.lightFont.color};
`;

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

  & + & {
    margin-top: 1em;
  }
`;

const Score = styled.span`
  font-size: 0.7em;
  color: ${(props) => props.theme.gray.color};
`;

export {
  Container,
  ToggleButton,
  FilterContainer,
  FilterName,
  InitButton,
  NextLink,
  ProductContainer,
  Picture,
  ProductInfo,
  ProductName,
  Title,
  Figure,
  Score,
};
