import styled from "styled-components";

const Toggle = styled.span`
  margin: 1em;
  padding: 0.5em 1em;
  border-radius: 2vw;
  font-size: ${(props) => `${props.size}em`};
  text-transform: uppercase;
  color: ${(props) => props.theme.white.color};
  background-color: ${(props) => props.color};
  /* box-shadow: 0px 5px 11px rgba(0, 0, 0, 0.15); */
`;

export default Toggle;
