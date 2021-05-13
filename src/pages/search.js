import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import SearchBar from "@/components/common/SearchBar";
import NextLink from "@/components/common/NextLink";

const Container = styled.div`
`;

const ProductList = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 15px;
`;

const ProductItem = styled.div`
  display: flex;
  height: 13vh;
  padding: 0.7em;
  border-bottom: 2px solid ${(props) => props.theme.lightGray.color};

  & + & {
    margin-top: 10px;
  }
`;

const ItemImage = styled.img`
  height: 100%;
`;

const ItemInfo = styled.div`
  max-width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.gray.color};
`;

const Name = styled.div`
  font-size: 1.3rem;
`;

const Brand = styled.div`
`;

const Score = styled.div`
  color: ${(props) => props.theme.primary.color};
`;

function Search() {
  const [prodList, setProdList] = useState([
    {
      src: "/bottle.png",
      name: "포카리",
      brand: "롯데칠성",
      id: "asef",
    },
    {
      src: "/bottle.png",
      name: "포카리",
      brand: "롯데칠성",
      id: "ase11f",
    },
    {
      src: "/bottle.png",
      name: "포카리",
      brand: "롯데칠성",
      id: "ase45f",
    },
    {
      src: "/bottle.png",
      name: "포카리",
      brand: "롯데칠성",
      id: "asef111",
    },
  ]);

  return (
    <Container>
      <SearchBar />
      <ProductList>
        {prodList.map((product) => (
          <NextLink apiRoute={`/product/${product.id}`}>
            <ProductItem key={product.id}>
              <ItemImage src={product.src} alt={product.name} />
              <ItemInfo>
                <Brand>{product.brand}</Brand>
                <Name>{product.name}</Name>
                <Score>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </Score>
              </ItemInfo>
            </ProductItem>
          </NextLink>
        ))}
      </ProductList>
    </Container>
  );
}

export default Search;

// 들어오는 순간
// context : params, req, res, query, preview, previewData,
// resolvedUrl, locale, locales, defaultLocale
// return props, notFound(bool)
// export async function getServerSideProps(context) {
//   const response = await
//   return {
//     props: {},
//   };
// }
