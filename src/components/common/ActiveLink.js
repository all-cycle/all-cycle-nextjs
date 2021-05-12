import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NextLink = styled.a`
`;

const StyledIcon = styled(FontAwesomeIcon)`
  width: 100%;
  font-size: 8vw;
`;

function ActiveLink({ iconName, apiRoute }) {
  const router = useRouter();
  const color = router.asPath === apiRoute ? "#3DD97E" : "#A69E9E";

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   router.push(route);
  // };

  return (
    <Link href={apiRoute}>
      <NextLink>
        <StyledIcon icon={iconName} color={color} />
      </NextLink>
    </Link>
  );
}

export default ActiveLink;
