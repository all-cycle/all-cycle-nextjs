import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import styled from "styled-components";

import useReviewForm from "@/hooks/useReviewForm";
import ReviewForm from "@/components/layout/ReviewForm";

const Container = styled.div`
  padding: 2vw;
`;

function Review() {
  const [session] = useSession();
  const router = useRouter();
  const { productId } = router.query;

  const {
    reviewData,
    handleChange,
    handleSubmit,
  } = useReviewForm("user1", productId);

  return (
    <Container>
      {/* TODO ProductCard 만들어서 재사용 / 이미지/제품정보 */}
      <h1>{productId}</h1>
      <ReviewForm
        comment={reviewData.comment}
        recycleScore={reviewData.recycleScore}
        preferenceScore={reviewData.preferenceScore}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </Container>
  );
}

export default Review;
