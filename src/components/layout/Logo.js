import styled from "styled-components";

const Container = styled.div`
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 40vh;
  background-color: ${(props) => props.theme.lightGray.color};
`;

function Logo({ children }) {
  return (
    <Container>
      <LogoContainer>
        Animation~
        {children}
      </LogoContainer>
    </Container>
  );
}

export default Logo;
