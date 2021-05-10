/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import GoogleButton from "../../common/GoogleButton";
import GoogleAPI from "../../../core/api/socialLogin";

const Container = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 50vw;
  height: 5vh;
  display: flex;
  justify-content: space-evenly;
  font-size: larger;
  background-color: ${(props) => props.theme.lightGray.color};
`;

function Header() {
  const dispatch = useDispatch();

  function handleLogin(e) {
    e.preventDefault();
  }
  return (
    <Container>
      <Link href="/" passHref>
        <a>
          <Image
            src="/home-solid.svg"
            alt="Link to home"
            width={50}
            height={50}
          />
        </a>
      </Link>
      <Link href="/product" passHref>
        <a>
          SEARCH
        </a>
      </Link>
      <Link href="/myPage" passHref>
        <a>
          MY PAGE
        </a>
      </Link>
      <Link href="/manager" passHref>
        <a>
          MANAGER
        </a>
      </Link>
      <Link href="/webLetter" passHref>
        <a>
          LETTER
        </a>
      </Link>
      <Link href="/" passHref>
        <a>
          <GoogleButton onClick={handleLogin} />
        </a>
      </Link>
    </Container>
  );
}

export default Header;
