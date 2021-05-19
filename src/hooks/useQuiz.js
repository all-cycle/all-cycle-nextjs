import { useState } from "react";

function useQuiz(answer) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [result, setResult] = useState(null);

  function checkAnswer(e) {
    e.preventDefault();
    setShowAnswer(true);

    // 정답이면 축하합니다, 뱃지 획득 모달 띄우기
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
    showAnswer,
    selectedOption,
    handleSelectOption,
    checkAnswer,
    handleReset,
  };
}

export default useQuiz;
