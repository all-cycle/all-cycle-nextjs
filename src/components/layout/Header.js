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
      <Link href="/" passHref>
        <ActiveLink>
          <FontAwesomeIcon icon={faHome} />
        </ActiveLink>
      </Link>
      <Link href="/product" passHref>
        <ActiveLink>
          <FontAwesomeIcon icon={faSearch} />
        </ActiveLink>
      </Link>
      <Link href="/myPage" passHref>
        <ActiveLink>
          <FontAwesomeIcon icon={faUserCircle} />
        </ActiveLink>
      </Link>
      <Link href="/manager" passHref>
        <ActiveLink>
          <FontAwesomeIcon icon={faCogs} />
        </ActiveLink>
      </Link>
      <Link href="/webLetter" passHref>
        <ActiveLink>
          <FontAwesomeIcon icon={faNewspaper} />
        </ActiveLink>
      </Link>
      <Button>
        <FontAwesomeIcon icon={faSignInAlt} onClick={handleLogin} />
      </Button>
    </Container>
  );
}

export default Header;
