import { useState } from "react";

function useReviewForm(
  email,
  productId,
) {
  const [reviewData, setReviewData] = useState({
    email,
    productId,
    comment: "",
    picture: "",
    recycleScore: 3,
    preferenceScore: 3,
  });

  function handleChange(e) {
    const { name } = e.target;
    const { value } = e.target;

    setReviewData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return {
    reviewData,
    handleChange,
  };
}

export default useReviewForm;
