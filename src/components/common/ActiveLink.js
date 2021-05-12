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

function ActiveLink({ iconName, route }) {
  const router = useRouter();
  const style = {
    color: router.asPath === route ? "#3DD97E" : "#A69E9E",
  };

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   router.push(route);
  // };

  return (
    <Link href={route}>
      <NextLink style={style}>
        <StyledIcon icon={iconName} />
      </NextLink>
    </Link>
  );
}

export default ActiveLink;
