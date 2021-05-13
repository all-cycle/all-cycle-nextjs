import { useState } from "react";

function useReviewForm(
  userId,
  productId,
) {
  const [reviewData, setReviewData] = useState({
    userId,
    productId,
    recycleScore: 3,
    preferenceScore: 3,
    comment: "",
    picture: "",
  });

  function handleChange(e) {
    const { name } = e.target;
    const { value } = e.target;

    setReviewData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(reviewData);
  }

  return {
    reviewData,
    handleChange,
    handleSubmit,
  };
}

export default useReviewForm;
