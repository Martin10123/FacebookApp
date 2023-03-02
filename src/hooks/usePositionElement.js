import { useEffect, useRef, useState } from "react";

export const usePositionElement = () => {
  const myDivRef = useRef(null);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const myDiv = myDivRef.current;

    const handleScroll = () => {
      if (!myDiv) return;

      const rect = myDiv.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const twentyPercentBeforeBottom = windowHeight - windowHeight * 0.3;
      setIsAtBottom(rect.top >= twentyPercentBeforeBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { myDivRef, isAtBottom };
};
