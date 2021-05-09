/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
// import Image from "next/image";
import styled from "styled-components";

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
  return (
    <Container>
      <Link href="/" passHref>
        <a>
          <img
            src="/home.svg"
            alt="Link to home"
            width={50}
            height={50}
          />
        </a>
      </Link>
      <Link href="/product" passHref>
        <a>
          <img
            src="/search.svg"
            alt="Link to search"
            width={50}
            height={50}
          />
        </a>
      </Link>
      <Link href="/myPage" passHref>
        <a>
          <img
            src="/spa_black_24dp.svg"
            alt="Link to my page"
            width={50}
            height={50}
          />
        </a>
      </Link>
      <Link href="/manager" passHref>
        <a>
          <img
            src="/activity.svg"
            alt="Link to manager"
            width={50}
            height={50}
          />
        </a>
      </Link>
      <Link href="/webLetter" passHref>
        <a>
          <img
            src="/bookmark.svg"
            alt="Link to webLetter"
            width={50}
            height={50}
          />
        </a>
      </Link>
    </Container>
  );
}

export default Header;
