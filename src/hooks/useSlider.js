import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

function useSlider() {
  const letters = useSelector((state) => state.letters) || [];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const TOTAL_SLIDES = 2;

  useEffect(() => {
    if (!letters.length) return;
    const slideIntervalId = setInterval(() => {
      if (currentSlide >= TOTAL_SLIDES) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide((prev) => prev + 1);
      }
    }, 3000);

    // eslint-disable-next-line consistent-return
    return () => clearInterval(slideIntervalId);
  }, [letters, currentSlide]);

  useEffect(() => {
    if (!letters.length) return;

    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return {
    letters,
    slideRef,
    currentSlide,
  };
}

export default useSlider;
