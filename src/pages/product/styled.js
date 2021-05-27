import styled from "styled-components";

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

export {
  Container,
  NextLink,
  ProductContainer,
  Picture,
  ProductInfo,
  ProductName,
};
