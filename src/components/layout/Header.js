/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch } from "react-redux";
import Link from "next/link";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faUserCircle,
  faNewspaper,
  faCogs,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

import { userLogin } from "../../core/reducers/userSlice";
import ActiveLink from "../common/ActiveLink";

const Container = styled.header`
  width: 100vw;
  height: 5vh;
  display: flex;
  justify-content: space-evenly;
  padding-top: 2rem;
  padding-bottom: 2rem;
  font-size: larger;
  background-color: ${(props) => props.theme.white.color};
`;

const LinkTo = styled.div`
  width: 100%;
  max-width: 10vw;
  max-height: 5vh;
`;

const Button = styled.div`
  all: unset;
  width: 100%;
  max-width: 10vw;
  max-height: 5vh;
  color: ${(props) => props.theme.gray.color};
`;

// TODO 로그인한 후에는 로그인버튼 안보이기
function Header() {
  const dispatch = useDispatch();

  function handleLogin() {
    dispatch(userLogin());
  }

  return (
    <Container>
      <Link href="/">
        <LinkTo>
          <ActiveLink route="/">
            <FontAwesomeIcon icon={faHome} />
          </ActiveLink>
        </LinkTo>
      </Link>
      <Link href="/product">
        <LinkTo>
          <ActiveLink route="/product">
            <FontAwesomeIcon icon={faSearch} />
          </ActiveLink>
        </LinkTo>
      </Link>
      <Link href="/myPage">
        <LinkTo>
          <ActiveLink route="/myPage">
            <FontAwesomeIcon icon={faUserCircle} />
          </ActiveLink>
        </LinkTo>
      </Link>
      <Link href="/manager">
        <LinkTo>
          <ActiveLink route="/manager">
            <FontAwesomeIcon icon={faCogs} />
          </ActiveLink>
        </LinkTo>
      </Link>
      <Link href="/webLetter">
        <LinkTo>
          <ActiveLink route="/webLetter">
            <FontAwesomeIcon icon={faNewspaper} />
          </ActiveLink>
        </LinkTo>
      </Link>
      <Button onClick={handleLogin}>
        <FontAwesomeIcon icon={faSignInAlt} />
      </Button>
      <button type="button" onClick={handleLogin}>
        google
      </button>
    </Container>
  );
}

export default Header;
