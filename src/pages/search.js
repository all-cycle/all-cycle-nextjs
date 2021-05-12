import { useState } from "react";
import styled from "styled-components";

import SearchBar from "@/components/common/SearchBar";

const Container = styled.div`
`;

const ProductList = styled.div`
`;

function Search() {
  const [prodList, setProdList] = useState([
    "/bottle.png",
    "/bottle.png",
    "/bottle.png",
    "/bottle.png",
  ]);

  return (
    <Container>
      <SearchBar />
      <ProductList>
        {prodList.map((product, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>
            {product}
          </div>
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
