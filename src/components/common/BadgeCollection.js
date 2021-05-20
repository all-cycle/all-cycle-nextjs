import Image from "next/image";
import styled, { css } from "styled-components";

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 0.5em;
  padding: 1em;
`;

const BadgeBorder = styled.span`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  border-radius: 50%;
  background-color: ${(props) => props.theme.graishGreen.color};
`;

const display = css`
  ${({ inCollecton }) => {
    if (inCollecton) {
      return css`
        z-index: 1;
      `;
    }

    return css`
      z-index: 0;
    `;
  }}
`;

const InnerBorder = styled(BadgeBorder)`
  position: fixed;
  background-color: ${(props) => props.theme.lightGray.color};

  ${display}
`;

function BadgeCollection({ userId, badges }) {
  const BADGES = [
    "glass1",
    "paper1",
    "plastic1",
    "plastic2",
    "plastic3",
  ];
  return (
    <Container>
      {BADGES.map((BADGE, index) => (
        <BadgeBorder key={userId + BADGE}>
          <InnerBorder inCollecton={BADGE === badges[index]}>
            <Image src={`/badges/${BADGE}.png`} alt={BADGE} width={50} height={50} />
          </InnerBorder>
        </BadgeBorder>
      ))}
    </Container>
  );
}

export default BadgeCollection;
