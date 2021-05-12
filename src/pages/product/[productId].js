import { useRouter } from "next/router";
import styled from "styled-components";

const Container = styled.div`
`;

const ProductItem = () => {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <Container>
      <div>{productId}</div>
    </Container>
  );
};

export default ProductItem;
