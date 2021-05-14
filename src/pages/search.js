import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import fetchData from "@/utils/fetchData";
import NextLink from "@/components/common/NextLink";
import StyledButton from "@/components/common/StyledButton";
import SearchBar from "@/components/common/SearchBar";
import { PRODUCT_TYPES, RECYCLE_TYPES } from "@/constants/productTypes";
import useSearch from "@/hooks/useSearch";

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

const Score = styled.div`
  color: ${(props) => props.theme.primary.color};
`;

const ToggleButton = styled(StyledButton)`
  font-size: 0.3em;
  margin: 0.5em;
`;

function Search({ productList }) {
  const {
    filter,
    sortedList,
    initializeFilter,
    sortWithKeyword,
    sortWithTypes,
    handleKeywordChange,
  } = useSearch(productList);

  return (
    <Container>
      <SearchBar
        keyword={filter.keyword}
        onChange={handleKeywordChange}
        onSubmit={sortWithKeyword}
      />
      <Container>
        {PRODUCT_TYPES.map((productType) => (
          <ToggleButton
            key={JSON.stringify(productType)}
            onClick={() => sortWithTypes("productType", productType[0])}
          >
            {productType[1]}
          </ToggleButton>
        ))}
      </Container>

      <Container>
        {RECYCLE_TYPES.map((recycleType) => (
          <ToggleButton
            key={JSON.stringify(recycleType)}
            onClick={() => sortWithTypes("recycleType", recycleType[0])}
          >
            {recycleType[1]}
          </ToggleButton>
        ))}
      </Container>

      <ToggleButton onClick={initializeFilter}>필터 초기화</ToggleButton>

      <ProductList>
        {sortedList?.map((product) => (
          <NextLink key={product._id} href={`/product/${product._id}`}>
            <ProductItem>
              <ItemImage src={product.imgUrl} alt={product.imgAlt} />
              <ItemInfo>
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

export async function getServerSideProps() {
  const productList = await fetchData("GET", "http://localhost:3000/api/product");

  return {
    props: { productList },
  };
}
