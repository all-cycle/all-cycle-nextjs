import { useState } from "react";

import fetchData from "@/utils/fetchData";

function useQuiz(answer, slug) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  async function checkAnswer(e) {
    e.preventDefault();
    // 정답이면 축하합니다, 뱃지 획득 모달 띄우기
    // 유저데이터 업데이트

    if (!answer === selectedOption) {
      setResult(false);
      setShowAnswer(true);
      return;
    }

    const response = await fetchData("POST", "/api/badge", slug);

    if (!response.result) {
      setError(response.error);
      return;
    }

    setShowAnswer(true);
    setResult(answer === selectedOption);
  }

  function handleSelectOption(option) {
    setSelectedOption(option);
    setShowAnswer(false);
  }

  function handleReset(e) {
    e.preventDefault();
    setSelectedOption(null);
    setShowAnswer(false);
    setResult(null);
  }

  return {
    result,
    error,
    showAnswer,
    selectedOption,
    handleSelectOption,
    checkAnswer,
    handleReset,
  };
}

export default useQuiz;
