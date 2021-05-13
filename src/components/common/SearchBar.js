import styled from "styled-components";

const Container = styled.div`
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

  ::placeholder {
    color: ${(props) => props.theme.gray.color};
  }
`;

function SearchBar() {
  return (
    <Container>
      <Input placeholder="Find Some" />
    </Container>
  );
}

export default SearchBar;
