import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

import HeadingLine from "@/components/common/HeadingLine";
import AnimationCamera from "@/components/layout/AnimationCamera";

const Container = styled.div`
  width: 100%;
  margin: 0;
`;

const TopItems = styled.div`
  display: flex;
  width: 100vw;
  margin: 10px 0 10px 0;
`;

const Thumbnail = styled.div`
  padding: 0.7em;
  margin: 0.3em;
  border-radius: 10%;
  background-color: ${(props) => props.theme.lightGray.color};
`;

export default function Main() {
  const [topList, setTopList] = useState([
    "/bottle.png",
    "/bottle.png",
    "/bottle.png",
    "/bottle.png",
  ]);

  return (
    <Container>
      <AnimationCamera />
      <HeadingLine title="TOP LANK ITEMS" />
      <TopItems>
        {topList.length && (
          topList.map((product, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Thumbnail key={index}>
              <Image
                src={product}
                alt={product}
                width="100"
                height="100"
              />
            </Thumbnail>
          ))
        )}
      </TopItems>

      <HeadingLine title="TIPS" />
      {/* 유튜브 목록들 세로스크롤 */}
    </Container>
  );
}
