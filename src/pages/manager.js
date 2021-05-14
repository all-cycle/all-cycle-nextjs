import styled from "styled-components";
import { useState } from "react";

import StyledButton from "@/components/common/StyledButton";
import StyledSelect from "@/components/common/StyledSelect";
import fetchData from "@/utils/fetchData";

const Container = styled.div`
  padding: 1em;
`;

const Ul = styled.ul`
`;

const Li = styled.li`
  width: 100%;
  padding: 1vh 0;
  border-bottom: 1px solid ${(props) => props.theme.primary.color};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ImageContainer = styled.div`
  flex-basis: 20%;
  height: 10vh;
  object-fit: cover;
  border-top-left-radius: 5vw;
  border-bottom-left-radius: 5vw;
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 5vw;
  border-bottom-left-radius: 5vw;
`;

const SelectContainer = styled.section`
`;

const TYPES = {
  product: ["etc", "soft", "ion", "coffee", "water", "juice"],
  recycle: ["etc", "pet", "glass", "aluminum"],
};

export default function Manager({ productList }) {
  const [updateList, setUpdateList] = useState([]);

  async function updateData(e) {
    e.preventDefault();

    try {
      await fetchData("PUT", "/api/product", updateList);
      return;
    } catch (err) {
      console.log(err.message);
    }
  }

  async function handleChange(e, _id, name) {
    const { value } = e.target;
    const sameProduct = updateList.find((product) => product._id === _id);

    if (!sameProduct) {
      setUpdateList((prev) => prev.concat({ _id, [name]: value }));
      return;
    }

    setUpdateList((prev) => prev.map((product) => {
      if (product._id !== _id) {
        return product;
      }

      return { ...product, [name]: value };
    }));
  }

  return (
    <Container>
      <h3>관리자페이지</h3>
      <StyledButton onClick={updateData}>
        DB 업데이트
      </StyledButton>
      <Ul>
        {productList.length > 0
          && (productList.map((product) => {
            const {
              _id,
              name,
              imgUrl,
              imgAlt,
              recycleType,
              productType,
            } = product;

            return (
              <Li key={_id}>
                <h3>{name}</h3>
                <Wrapper>
                  <ImageContainer>
                    <Image
                      src={imgUrl}
                      alt={imgAlt}
                    />
                  </ImageContainer>

                  <SelectContainer>
                    <StyledSelect
                      productId={_id}
                      name="productType"
                      types={TYPES.product}
                      defaultType={productType}
                      onChange={handleChange}
                    />
                    <StyledSelect
                      productId={_id}
                      name="recycleType"
                      types={TYPES.recycle}
                      defaultType={recycleType}
                      onChange={handleChange}
                    />
                  </SelectContainer>
                </Wrapper>
              </Li>
            );
          })
          )}
      </Ul>
    </Container>
  );
}

// NOTE 페이지에 들어오면 새로 요청해서 받아온다
export async function getStaticProps() {
  const productList = await fetchData("GET", "http://localhost:3000/api/product");

  return {
    props: { productList },
  };
  // const response = await fetch("http://localhost:3000/api/manager");
  // const data = await response.json();

  // 몇개 새로 추가되었는지 알려줌
  // return {
  //   props: { count: data.count },
  // };
}
