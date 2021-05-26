import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1vh;
  width: 50vw;
`;

const Label = styled.label`
  padding: 0.4em;
  font-size: 1em;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fontEng};
`;

const Select = styled.select`
  padding: 0.3em;
  border-radius: 2vw;
  font-size: 2vw;
  color: ${(props) => props.theme.white.color};
  background-color: ${(props) => props.theme.gray.color};
  font-family: ${(props) => props.theme.fontKor};
`;

const Option = styled.option`
  font-size: 2vw;

  &:focus {
    outline: none;
  }
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
        {types.map((type) => {
          const [engType, korType] = type;
          return (
            <Option key={productId + type} value={engType}>
              {korType}
            </Option>
          );
        })}
      </Select>
    </Container>
  );
}

export default StyledSelect;
