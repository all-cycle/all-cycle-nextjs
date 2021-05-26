import { useState } from "react";

import fetchData from "@/utils/fetchData";
import { PRODUCT_TYPES, RECYCLE_TYPES } from "@/constants/productTypes";
import ProductItem from "@/components/layout/ProductItem";
import SearchBar from "@/components/element/SearchBar";
import StyledList from "@/components/element/StyledList";
import useSearch from "@/hooks/useSearch";
import {
  Container,
  ToggleButton,
  FilterContainer,
  FilterName,
  InitButton,
  NextLink,
} from "./styled";

function Search({ productList }) {
  const {
    sortFilter,
    sortedList,
    sortWithTypes,
    sortWithKeyword,
    initializeFilter,
  } = useSearch(productList);
  const [message, setMessage] = useState("");

  function handleError(message) {
    setMessage(message);
  }

  return (
    <Container>
      <SearchBar sortWithKeyword={sortWithKeyword} handleError={handleError} />
      {message && <div>{message}</div>}
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
