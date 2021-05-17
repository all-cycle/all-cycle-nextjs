import styled from "styled-components";

import useSearch from "@/hooks/useSearch";
import fetchData from "@/utils/fetchData";
import { PRODUCT_TYPES, RECYCLE_TYPES } from "@/constants/productTypes";
import StyledButton from "@/components/common/StyledButton";
import SearchBar from "@/components/common/SearchBar";
import ProductItem from "@/components/common/ProductItem";
import NextLink from "@/components/common/NextLink";

const Container = styled.div`
  margin: 0;
`;

const ToggleButton = styled(StyledButton)`
  font-size: 0.3em;
  margin: 0.5em;
`;

const StyledList = styled.article`
  width: 100%;
  margin-top: 15px;
`;

const FilterContainer = styled.div`
  padding: 1em;
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
      <FilterContainer>
        <ToggleButton onClick={initializeFilter}>필터 초기화</ToggleButton>

        {PRODUCT_TYPES.map((productType) => (
          <ToggleButton
            key={JSON.stringify(productType)}
            onClick={() => sortWithTypes("productType", productType[0])}
          >
            {productType[1]}
          </ToggleButton>
        ))}

        {RECYCLE_TYPES.map((recycleType) => (
          <ToggleButton
            key={JSON.stringify(recycleType)}
            onClick={() => sortWithTypes("recycleType", recycleType[0])}
          >
            {recycleType[1]}
          </ToggleButton>
        ))}

      </FilterContainer>

      <StyledList>
        {sortedList?.map((product) => (
          <NextLink key={product._id} href={`/search/${product._id}`}>
            <ProductItem product={product} />
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
