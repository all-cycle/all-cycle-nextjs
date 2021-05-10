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
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 5vh;
  display: flex;
  justify-content: space-evenly;
  font-size: larger;
  background-color: ${(props) => props.theme.white.color};
`;

const LinkTo = styled.div`
`;

const Button = styled.div`
  width: 50px;
  height: 50px;
  color: ${(props) => props.theme.gray.color};
`;

function Header() {
  const dispatch = useDispatch();

  function handleLogin(e) {
    e.preventDefault();

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
      <Button>
        <FontAwesomeIcon icon={faSignInAlt} onClick={handleLogin} />
      </Button>
    </Container>
  );
}

export default Header;
