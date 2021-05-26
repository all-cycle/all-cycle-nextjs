import { useState } from "react";
import { useSession } from "next-auth/client";
import styled from "styled-components";

import fetchData from "@/utils/fetchData";

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

function SearchBar({ sortWithKeyword, handleError }) {
  const [keyword, setKeyword] = useState("");
  const [session] = useSession();

  function handleChange(e) {
    setKeyword(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (session?.user.email) {
        const response = await fetchData(
          "POST",
          `/api/user/${session?.user.email}`,
          keyword,
        );

        if (!response.result) {
          handleError(response.error);
          return;
        }
      }

      sortWithKeyword(keyword);
    } catch (err) {
      handleError(err.message);
    }
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
