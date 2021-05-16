import { useState } from "react";
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

function SearchBar({ sortWithKeyword }) {
  const [keyword, setKeyword] = useState("");

  function handleChange(e) {
    setKeyword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    sortWithKeyword(keyword);
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        placeholder="Find Some"
        name="keyword"
        value={keyword}
        onChange={handleChange}
      />
    </Container>
  );
}

export default SearchBar;
