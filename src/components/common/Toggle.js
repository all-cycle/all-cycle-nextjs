import styled from "styled-components";

const Toggle = styled.span`
  margin: 1em;
  padding: 0.5em 1em;
  border-radius: 2vw;
  font-size: ${(props) => `${props.size}em`};
  text-transform: uppercase;
  color: ${(props) => props.theme.white.color};
  background-color: ${(props) => props.color};
`;

export default Toggle;
