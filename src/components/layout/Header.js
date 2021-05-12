/* eslint-disable jsx-a11y/anchor-is-valid */
import { signIn, signOut, useSession } from "next-auth/client";
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

import LinkIcon from "@/components/common/LinkIcon";

const Container = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: larger;
  background-color: ${(props) => props.theme.white.color};
`;

const StyledIcon = styled(FontAwesomeIcon)`
  width: 100%;
  font-size: 8vw;
  color: ${(props) => props.theme.gray.color};
`;

function Header() {
  const [session, loading] = useSession();

  return (
    <Container>
      <LinkIcon iconName={faHome} apiRoute="/" />
      <LinkIcon iconName={faSearch} apiRoute="/search" />
      <LinkIcon iconName={faUserCircle} apiRoute="/myPage" />
      <LinkIcon iconName={faCogs} apiRoute="/manager" />
      <LinkIcon iconName={faNewspaper} apiRoute="/webLetter" />
      {!session ? (
        <StyledIcon icon={faSignInAlt} onClick={signIn} />
      ) : (
        <StyledIcon icon={faSignOutAlt} onClick={signOut} />
      )}
    </Container>
  );
}

export default Header;
