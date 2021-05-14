import styled from "styled-components";

const Container = styled.div`
  margin: 1vh;
`;

const Label = styled.label`
  padding: 0.4em;
  font-size: 3vw;
  background-color: ${(props) => props.theme.lightGray.color};
  box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.15);
`;

const Select = styled.select`
  padding: 0.3em;
  border-radius: 2vw;
  font-size: 3vw;
  color: ${(props) => props.theme.white.color};
  background-color: ${(props) => props.theme.gray.color};
`;

const Option = styled.option`
`;

function StyledSelect({
  productId,
  name,
  types,
  defaultType = "etc",
  onChange,
}) {
  return (
    <Container>
      <Label htmlFor={name}>{name}</Label>
      <Select
        name={name}
        defaultValue={defaultType}
        onChange={(e) => onChange(e, productId, name)}
      >
        {types.map((type) => (
          <Option
            key={productId + type}
            value={type}
            // selected={type === defaultType}
          >
            {type}
          </Option>
        ))}
      </Select>
    </Container>
  );
}

export default StyledSelect;
