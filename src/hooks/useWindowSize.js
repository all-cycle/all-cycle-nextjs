import { useEffect, useState } from "react";

function useWindowSize() {
  // TODO windowSize 다른데에서 안쓰면 지우기
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  const [isMobile, setIsMobile] = useState(false);
  const [idealResolution, setIdealResolution] = useState({ width: 375, height: 812 });

  function handleSetResolution() {
    if (window.innerWidth <= 450) {
      setIsMobile(true);
      setIdealResolution({ width: 375, height: 812 });
      return;
    }

    setIsMobile(false);
    setIdealResolution({ width: 640, height: 480 });
  }

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.addEventListener("resize", handleSetResolution);

    handleSetResolution();

    // eslint-disable-next-line consistent-return
    return () => window.removeEventListener("resize", handleSetResolution);
  }, []);

  return {
    windowSize,
    isMobile,
    idealResolution,
  };
}

export default useWindowSize;
