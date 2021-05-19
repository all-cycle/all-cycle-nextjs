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
      <LinkIcon
        iconName={faHome}
        href="/"
      />
      <LinkIcon
        iconName={faSearch}
        href="/product"
      />
      <LinkIcon
        iconName={faGraduationCap}
        href="/quiz"
      />
      <LinkIcon
        iconName={faNewspaper}
        href="/webLetter"
      />

      {!session ? (
        <LinkIcon
          iconName={faSignInAlt}
          href="/api/auth/signin"
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        />
      ) : (
        <>
          <LinkIcon
            iconName={faUserCircle}
            href="/myPage"
          />
          <LinkIcon
            iconName={faSignOutAlt}
            href="/api/auth/signout"
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          />
        </>
      )}
      {session
        && session?.user.email === process.env.managerAccount
        && (
          <LinkIcon
            iconName={faCogs}
            href="/manager"
          />
        )}
    </Container>
  );
}

export default Header;
