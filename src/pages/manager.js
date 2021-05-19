import styled from "styled-components";
import { useState } from "react";

import fetchData from "@/utils/fetchData";
import StyledButton from "@/components/common/StyledButton";
import StyledSelect from "@/components/common/StyledSelect";
import { PRODUCT_TYPES, RECYCLE_TYPES } from "@/constants/productTypes";

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

const UpdateCount = styled.span`
  font-size: 0.3em;
  font-weight: 400;
  margin-left: 2vw;
`;

export default function Manager({ count, productList }) {
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
      <h3>
        관리자페이지
        <UpdateCount>업데이트 된 제품 수: {count}</UpdateCount>
      </h3>
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
                      types={PRODUCT_TYPES}
                      defaultType={productType}
                      onChange={handleChange}
                    />
                    <StyledSelect
                      productId={_id}
                      name="recycleType"
                      types={RECYCLE_TYPES}
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

export async function getServerSideProps() {
  const count = await fetchData("GET", `${process.env.HOMEPAGE_URL}/api/manager`);
  const productList = await fetchData("GET", `${process.env.HOMEPAGE_URL}/api/product`);

  return {
    props: {
      count: count.data || 0,
      productList: productList.data,
    },
  };
}
