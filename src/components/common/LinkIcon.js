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

function LinkIcon({ iconName, apiRoute }) {
  const router = useRouter();
  const color = router.asPath === apiRoute ? "#3DD97E" : "#A69E9E";

  return (
    <Link href={apiRoute}>
      <LinkTo>
        <StyledIcon icon={iconName} color={color} />
      </LinkTo>
    </Link>
  );
}

export default LinkIcon;
