import styled from "styled-components";

const Container = styled.form`
  width: 90%;
  height: 5vh;
  display: flex;
  align-items: center;
  margin: auto;
  padding-left: 2vw;
  border-radius: 2vw;
  background-color: ${(props) => props.theme.lightGray.color};
`;

const Input = styled.input`
  all: unset;
  width: 100%;

  ::placeholder {
    color: ${(props) => props.theme.gray.color};
  }
`;

function SearchBar({ keyword, onChange, onSubmit }) {
  return (
    <Container onSubmit={onSubmit}>
      <Input
        placeholder="Find Some"
        value={keyword}
        onChange={onChange}
      />
    </Container>
  );
}

export default SearchBar;
