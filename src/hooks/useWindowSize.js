import { useEffect, useState } from "react";

function useWindowSize() {
  // TODO windowSize 다른데에서 안쓰면 지우기
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setIsMobile] = useState(false);
  const [idealResolution, setIdealResolution] = useState({ width: 640, height: 480 });

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line no-inner-declarations
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });

        if (window.innerWidth < 400) {
          setIsMobile(true);
          setIdealResolution({ width: 375, height: 812 });
        }

        if (window.innerWidth > 400) {
          setIsMobile(false);
          setIdealResolution({ width: 640, height: 480 });
        }
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return {
    windowSize,
    isMobile,
    idealResolution,
  };
}

export default useWindowSize;
