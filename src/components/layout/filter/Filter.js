import {
  Container,
  Name,
  ToggleButton,
} from "./styled";

function Filter({ TYPES, sortFilter, sortWithTypes }) {
  return (
    <Container>
      <Name>CATEGORY</Name>

      {TYPES.map((type) => (
        <ToggleButton
          key={JSON.stringify(type)}
          isclicked={sortFilter.productType === type[0]}
          onClick={() => sortWithTypes("productType", type[0])}
          size={0.4}
        >
          {type[1]}
        </ToggleButton>
      ))}
    </Container>
  );
}

export default Filter;
