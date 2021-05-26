import styled from "styled-components";

const StyledImageContainer = styled.div`
  flex-basis: 50%;
  height: 10vh;
  object-fit: cover;
  border-top-left-radius: 5vw;
  border-bottom-left-radius: 5vw;

  /* NOTE 사진에서도 text-align 먹히는지 확인 */
  text-align: center;
`;

export default StyledImageContainer;
