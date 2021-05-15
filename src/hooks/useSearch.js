import { useState } from "react";

function useSearch(productList) {
  const [filter, setFilter] = useState({
    recycleType: "all",
    productType: "all",
    keyword: "",
  });
  const [sortedList, setSortedList] = useState(productList);

  function sortWithTypes(type, value) {
    setSortedList(productList.filter((product) => product[type] === value));
  }

  function initializeFilter(e) {
    e.stopPropagation();
    setSortedList(productList);
  }

  function handleKeywordChange(e) {
    e.stopPropagation();
    setFilter((prev) => ({ ...prev, keyword: e.target.value }));
  }

  function sortWithKeyword(e) {
    e.preventDefault();
    const { keyword } = filter;

    setSortedList(productList.filter((product) => {
      if (product.name.match(keyword)) {
        return product;
      }

      if (product.productType.match(keyword) || product.recycleType.match(keyword)) {
        return product;
      }

      return null;
    }));

    setFilter((prev) => ({ ...prev, keyword: "" }));
  }

  return {
    filter,
    sortedList,
    initializeFilter,
    sortWithKeyword,
    sortWithTypes,
    handleKeywordChange,
  };
}

export default useSearch;
