import styled from "styled-components";

const Container = styled.div`
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 40vh;
  background-color: ${({ theme }) => theme.lightGray.color};
`;

function Logo() {
  return (
    <Container>
      <LogoContainer>
        Animation~
      </LogoContainer>
    </Container>
  );
}

export default Logo;
