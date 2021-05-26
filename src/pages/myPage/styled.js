import styled from "styled-components";

import StyledList from "@/components/element/StyledList";
import StyledButton from "@/components/element/StyledButton";

const Container = styled.div`
  height: 90vh;
  max-height: 800px;
  display: flex;
  flex-direction: column;
  padding: 1em;
  background-color: ${(props) => props.theme.font.color};
  font-family: ${(props) => props.theme.fontEng};
  overflow: hidden;
`;

const UserInfo = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 0.5em 1em;
  margin-bottom: 0.5em;
  border-radius: 2vw;
  font-weight: 400;
  font-size: 1.3em;
  color: ${(props) => props.theme.white.color};
  text-align: end;
  border-radius: 4vw;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
`;

const UserProfile = styled.div`
  width: 90px;
  height: 90px;
  padding: 0.2em;
  border-radius: 50%;
  background-color: ${(props) => props.theme.lightFont.color};
`;

const UserImage = styled.img`
  height: 100%;
  border-radius: 50%;
`;

const Email = styled.div`
  font-size: 0.2em;
`;

const Text = styled.span`
  font-size: 1em;
  font-weight: 600;
  color: ${(props) => props.theme.badgeBg.color};
  margin-top: 1em;
  margin-left: 1em;
  text-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.15);
`;

const Footer = styled.p`
  color: ${(props) => props.theme.lightFont.color};
  font-size: 0.3em;
  margin-left: 1em;
  font-style: italic;
  text-align: center;
`;

const BadgeContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  justify-content: center;
  gap: 0.5em;
  padding: 1em;
`;

const ReviewList = styled(StyledList)`
  padding: 1em;
  margin-bottom: 1.5em;
  max-height: 180px;
  overflow-y: scroll;
`;

const PhotoList = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 100px;
  grid-auto-columns: 1vw;
  margin: 0.5em;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const ImageContainer = styled.li`
height: 100%;
object-fit: cover;
border-radius: 1em;
text-align: center;
padding: 0.5em;
background-color: ${(props) => props.theme.lightFont.color};

& + & {
  margin-left: 0.5em;
}

&:hover {
  transform: scale(1.2);
}
`;

const Image = styled.img`
height: 100%;
border-radius: 10%;
`;

const Content = styled.li`
width: 100%;
display: flex;
justify-content: space-between;
padding: 0.4em 1em;
border-radius: 2vw;
font-size: 0.5em;
color: white;
background-color: ${(props) => props.theme.darkGray.color};

& + & {
  margin-top: 0.7em;
}
`;

const Score = styled.span`
font-size: 0.3em;
color: ${(props) => props.theme.gray.color};
`;

export {
  Container,
  StyledButton,
  UserInfo,
  UserProfile,
  UserImage,
  Email,
  Text,
  ReviewList,
  Content,
  Image,
  Score,
  PhotoList,
  ImageContainer,
  BadgeContainer,
  Footer,
};
