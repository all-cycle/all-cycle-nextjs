import { useState } from "react";

function useSearch(productList) {
  const [sortFilter, setSortFilter] = useState({
    recycleType: "",
    productType: "",
  });
  const [sortedList, setSortedList] = useState(productList);

  function sortWithTypes(type, value) {
    if (type === "recycleType") {
      if (!sortFilter.productType) {
        setSortedList(productList.filter((product) => product.recycleType === value));
      } else {
        setSortedList(productList.filter((product) => {
          return product.recycleType === value
            && product.productType === sortFilter.productType;
        }));
      }

      setSortFilter((prev) => {
        return {
          ...prev,
          recycleType: value,
        };
      });
    } else {
      if (!sortFilter.recycleType) {
        setSortedList(productList.filter((product) => product.productType === value));
      } else {
        setSortedList(productList.filter((product) => {
          return product.productType === value
            && product.recycleType === sortFilter.recycleType;
        }));
      }

      setSortFilter((prev) => {
        return {
          ...prev,
          productType: value,
        };
      });
    }
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

  function initializeFilter(e) {
    e.stopPropagation();
    setSortFilter([]);
    setSortedList(productList);
  }

  return {
    sortFilter,
    sortedList,
    sortWithKeyword,
    sortWithTypes,
    initializeFilter,
  };
}

export default useSearch;
