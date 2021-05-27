import { PRODUCT_TYPES, RECYCLE_TYPES } from "@/constants/productTypes";
import StyledList from "@/components/element/StyledList";
import Filter from "./Filter";
import { Container, InitButton } from "./styled";

function FilterContainer({ sortFilter, sortWithTypes, initializeFilter }) {
  return (
    <StyledList>
      <Container>
        <InitButton onClick={initializeFilter} size={0.4}>필터 초기화</InitButton>
      </Container>

      <Filter
        name="CATEGORY"
        TYPES={PRODUCT_TYPES}
        sortFilter={sortFilter}
        sortWithTypes={sortWithTypes}
      />

      <Filter
        name="PACKAGE"
        TYPES={RECYCLE_TYPES}
        sortFilter={sortFilter}
        sortWithTypes={sortWithTypes}
      />
    </StyledList>
  );
}

export default FilterContainer;
