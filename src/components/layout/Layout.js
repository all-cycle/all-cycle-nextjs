import Head from "next/head";
import styled from "styled-components";

const Container = styled.div`
`;

const Main = styled.main`
`;

function Layout(props) {
  return (
    <Container>
      <Head>
        <title>ALL-Cycle</title>
        <meta name="description" content="Search first, Buy next!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        {props.children}
      </Main>
    </Container>
  );
}

export default Layout;
