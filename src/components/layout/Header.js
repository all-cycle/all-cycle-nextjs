import { signIn, signOut, useSession } from "next-auth/client";
import styled from "styled-components";
import {
  faHome,
  faSearch,
  faUserCircle,
  faNewspaper,
  faCogs,
  faSignInAlt,
  faSignOutAlt,
  faGraduationCap,
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

function Header() {
  const [session] = useSession();

  return (
    <Container>
      <LinkIcon iconName={faHome} href="/" />
      <LinkIcon iconName={faSearch} href="/search" />

      <LinkIcon iconName={faGraduationCap} href="/quiz" />
      {/* NOTE 뉴스레터 누르면 dropdown 목록 나와서 유튜브/뉴스레터 메뉴 */}
      <LinkIcon iconName={faNewspaper} href="/webLetter" />

      {!session && (
        <LinkIcon
          iconName={faSignInAlt}
          href="/api/auth/signin"
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        />
      )}
      {session
        && session.user.email === "maudlinsy@gmail.com"
        && <LinkIcon iconName={faCogs} href="/manager" />}
      {session && (
        <>
          <LinkIcon iconName={faUserCircle} href="/myPage" />
          <LinkIcon
            iconName={faSignOutAlt}
            href="/api/auth/signout"
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          />
          {/* <StyledIcon icon={faSignOutAlt} onClick={() => signOut()} /> */}
        </>
      )}
    </Container>
  );
}

export default Header;
