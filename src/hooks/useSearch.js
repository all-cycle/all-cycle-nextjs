import { useState } from "react";

function useSearch(productList) {
  const initialState = {
    recycleType: "all",
    productType: "all",
  };
  const [filter, setFilter] = useState(initialState);
  const [sortedList, setSortedList] = useState(productList);

  function sortWithTypes(type, value) {
    setSortedList((prev) => prev.filter((product) => product[type] === value));
  }

  function initializeFilter(e) {
    e.stopPropagation();
    setFilter(initialState);
    setSortedList(productList);
  }

  function sortWithKeyword(word) {
    setSortedList(productList.filter((product) => {
      if (product.name.match(word)) {
        return product;
      }

      if (product.productType.match(word) || product.recycleType.match(word)) {
        return product;
      }

      return null;
    }));
  }

  return {
    filter,
    sortedList,
    initializeFilter,
    sortWithKeyword,
    sortWithTypes,
  };
}

export default useSearch;
