import fetchData from "@/utils/fetchData";
import { PRODUCT_TYPES, RECYCLE_TYPES } from "@/constants/productTypes";
import useManager from "@/hooks/useManager";
import {
  Container,
  Title,
  Strong,
  Ul,
  Li,
  Wrapper,
  ImageContainer,
  Image,
  SelectContainer,
  ManagerOptions,
  UpdateCount,
  ProductName,
  Button,
} from "./styled";

function Manager({ productList }) {
  const {
    count,
    message,
    crawlData,
    updateData,
    handleChange,
  } = useManager(productList);

  return (
    <Container>
      <Title>
        <UpdateCount>
          <Strong>관리자페이지 </Strong>
          {message && <span>{message}</span>}
          {count && <span>업데이트 된 제품 수: {count}</span>}
        </UpdateCount>
        <div>
          <Button onClick={crawlData}>
            NEW 크롤링
          </Button>
          <Button onClick={updateData}>
            DB 업데이트
          </Button>
        </div>
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
                    <ManagerOptions
                      productId={_id}
                      name="productType"
                      types={PRODUCT_TYPES}
                      defaultType={productType}
                      onChange={handleChange}
                    />
                    <ManagerOptions
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

export default Manager;

export async function getServerSideProps() {
  const response = await fetchData("GET", `${process.env.HOMEPAGE_URL}/api/product`);

  if (response.result) {
    return {
      props: { productList: response.data },
    };
  }

  return {
    props: { productList: [] },
  };
}
