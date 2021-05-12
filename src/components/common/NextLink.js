import Link from "next/link";
import styled from "styled-components";

const LinkTo = styled.a`
`;

function NextLink({ apiRoute, children }) {
  return (
    <Link href={apiRoute}>
      <LinkTo>
        {children}
      </LinkTo>
    </Link>
  );
}

export default NextLink;
