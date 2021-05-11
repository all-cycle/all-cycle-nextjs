/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch } from "react-redux";
import { signIn, signOut, useSession } from "next-auth/client";
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
  faSignOutAlt,
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

function Header() {
  const dispatch = useDispatch();
  const [session, loading] = useSession();

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
      <Button type="button" onClick={() => signIn()}>
        <FontAwesomeIcon icon={faSignInAlt} />
      </Button>
      <Button type="button" onClick={() => signOut()}>
        <FontAwesomeIcon icon={faSignOutAlt} />
      </Button>
    </Container>
  );
}

export default Header;
