import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LinkTo = styled.a`
`;

const StyledIcon = styled(FontAwesomeIcon)`
  width: 100%;
  font-size: 8vw;
`;

function LinkIcon({ iconName, href }) {
  const router = useRouter();
  const currentRoute = router.asPath.split("/")[1];
  console.log(currentRoute);
  const color = `/${currentRoute}` === href ? "#3DD97E" : "#A69E9E";

  return (
    <Link href={href} passHref>
      <LinkTo>
        <StyledIcon icon={iconName} color={color} />
      </LinkTo>
    </Link>
  );
}

export default LinkIcon;
