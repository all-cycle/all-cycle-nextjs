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
  font-size: 1rem;
`;

const Brand = styled.div`
`;

const Score = styled.div`
  color: ${(props) => props.theme.primary.color};
`;

function Search({ productList }) {
  return (
    <Container>
      <SearchBar />
      <ProductList>
        {productList?.map((product) => (
          <NextLink href={`/product/${product._id}`}>
            <ProductItem key={product._id}>
              <ItemImage src={product.imgUrl} alt={product.imgAlt} />
              <ItemInfo>
                {/* TODO 브랜드 이름은 [ ] 로 자르면 될듯 */}
                {product.brand && <Brand>{product.brand}</Brand>}
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

export async function getServerSideProps(context) {
  const response = await fetch("http://localhost:3000/api/product");
  const data = await response.json();

  return {
    props: { productList: data.productList },
  };
}
