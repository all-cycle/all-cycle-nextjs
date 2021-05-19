import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

const LinkTo = styled.a`
`;

const StyledIcon = styled(FontAwesomeIcon)`
  width: 100%;
  font-size: ${(props) => props.size};
`;

function LinkIcon({
  iconName,
  href,
  size,
}) {
  const router = useRouter();
  const color = `/${router.asPath.split("/")[1]}` === href ? "#3DD97E" : "#A69E9E";

  return (
    <Link href={href} passHref>
      <LinkTo>
        <StyledIcon icon={iconName} color={color} size={size || "2x"} />
      </LinkTo>
    </Link>
  );
}

export default LinkIcon;
