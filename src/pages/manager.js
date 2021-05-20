import styled from "styled-components";
import { useState } from "react";

import fetchData from "@/utils/fetchData";
import StyledSelect from "@/components/common/StyledSelect";
import { PRODUCT_TYPES, RECYCLE_TYPES } from "@/constants/productTypes";

const Container = styled.div`
  padding-top: 1em;
  font-family: ${(props) => props.theme.fontEng};
  background-color: ${(props) => props.theme.lightGray.color};
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.font.color};
  margin-bottom: 1em;
  padding: 0 1em;
`;

const Strong = styled.strong`
  all: unset;
  font-size: 1.2rem;
  font-weight: 600;
`;

const Ul = styled.ul`
`;

const Li = styled.li`
  width: 100%;
  padding: 0.2em 1em;
  margin-bottom: 0.2em;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  padding: 0.5em 1.2em;
  border-bottom: 1px solid ${(props) => props.theme.skyblue.color};
  border-left: 1px solid ${(props) => props.theme.skyblue.color};
  border-right: 1px solid ${(props) => props.theme.skyblue.color};
  background-color: ${(props) => props.theme.white.color};
`;

const ImageContainer = styled.div`
  flex-basis: 20%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 5vw;
  border-bottom-left-radius: 5vw;
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  border-radius: 2vw;
`;

const SelectContainer = styled.section`
  width: 100%;
`;

const UpdateCount = styled.span`
  font-size: 0.3em;
  font-weight: 400;
  margin-left: 2vw;
`;

const ProductName = styled.div`
  padding: 0.3em 0.7em;
  border: 1px solid ${(props) => props.theme.skyblue.color};
  font-size: 0.9em;
  font-weight: 500;
  color: ${(props) => props.theme.skyblue.color};
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.15);
  background-color: ${(props) => props.theme.lightGray.color};
`;

const Button = styled.button`
  border: none;
  border-radius: 2vw;
  padding: 0.5em 1em;
  font-size: 0.5em;
  color: ${(props) => props.theme.white.color};
  background-color: ${(props) => props.theme.skyblue.color};
`;

export default function Manager({ count, productList }) {
  const [updatedList, setUpdatedList] = useState(productList);
  const [message, setMessage] = useState("");

  async function updateData(e) {
    e.preventDefault();

    try {
      const response = await fetchData("PUT", "/api/product", updatedList);
      setMessage(response.data);
      return;
    } catch (err) {
      console.log(err.message);
    }
  }

  async function handleChange(e, _id, name) {
    const { value } = e.target;

    setUpdatedList((prev) => prev.map((product) => {
      if (product._id !== _id) {
        return product;
      }

      return { ...product, [name]: value };
    }));
  }

  return (
    <Container>
      <Title>
        <UpdateCount>
          <Strong>관리자페이지 </Strong>
          {message
            ? <span>{message}</span>
            : <span>업데이트 된 제품 수: {count}</span>}
        </UpdateCount>
        <Button onClick={updateData}>
          DB 업데이트
        </Button>
      </Title>
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
                <ProductName>{name}</ProductName>
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

// NOTE 페이지에 들어오면 새로 요청해서 받아온다
export async function getServerSideProps() {
  const count = await fetchData("GET", `${process.env.HOMEPAGE_URL}/api/manager`);
  const productList = await fetchData("GET", `${process.env.HOMEPAGE_URL}/api/product`);

  // 몇개 새로 추가되었는지 알려줌
  return {
    props: {
      count: count.data || 0,
      productList: productList.data,
    },
  };
}
