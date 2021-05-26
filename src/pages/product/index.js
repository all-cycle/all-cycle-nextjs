import styled, { css } from "styled-components";

import useSearch from "@/hooks/useSearch";
import fetchData from "@/utils/fetchData";
import { PRODUCT_TYPES, RECYCLE_TYPES } from "@/constants/productTypes";
import SearchBar from "@/components/common/SearchBar";
import ProductItem from "@/components/layout/ProductItem";
import NextLink from "@/components/common/NextLink";
import StyledList from "@/components/common/StyledList";

const Container = styled.div`
  margin: 0;
  padding-top: 0.3em;
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
  /* margin: auto; */
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
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

function Search({ productList }) {
  const {
    sortFilter,
    sortedList,
    sortWithTypes,
    sortWithKeyword,
    initializeFilter,
  } = useSearch(productList);

  return (
    <Container>
      <SearchBar sortWithKeyword={sortWithKeyword} />
      <FilterContainer>
        <div>
          <FilterName>CATEGORY</FilterName>
          {PRODUCT_TYPES.map((productType) => (
            <ToggleButton
              key={JSON.stringify(productType)}
              isclicked={sortFilter.productType === productType[0]}
              onClick={() => sortWithTypes("productType", productType[0])}
            >
              {productType[1]}
            </ToggleButton>
          ))}
        </div>

        <span>
          <FilterName>PACKAGE</FilterName>
          {RECYCLE_TYPES.map((recycleType) => (
            <ToggleButton
              key={JSON.stringify(recycleType)}
              isclicked={sortFilter.recycleType === recycleType[0]}
              onClick={() => sortWithTypes("recycleType", recycleType[0])}
            >
              {recycleType[1]}
            </ToggleButton>
          ))}
        </span>
        <InitButton onClick={initializeFilter}>필터 초기화</InitButton>
      </FilterContainer>

      <StyledList>
        {sortedList?.map((product, index) => (
          <NextLink key={product._id} href={`/product/${product._id}`} prefetch>
            <ProductItem product={product} isEven={index % 2} />
          </NextLink>
        ))}
      </StyledList>
    </Container>
  );
}

export default Search;

export async function getServerSideProps() {
  const response = await fetchData("GET", `${process.env.HOMEPAGE_URL}/api/product`);

  if (response.result) {
    return {
      props: { productList: response.data },
    };
  }

  return {
    props: { productList: [] },
  };
}
