import { useState, useRef } from "react";

interface Timer {
  start: () => void;
  stop: () => void;
  currentTimeMs: number;
}

const useTimer = (): Timer => {
  const [currentTimeMs, setCurrentTimeMs] = useState(0);

  const interval = useRef(0);
  const start = () => {
    setCurrentTimeMs(0);
    interval.current = setInterval(() => {
      setCurrentTimeMs((currentTimeMs) => currentTimeMs + 10);
    }, 10);
  };

  const stop = () => {
    clearInterval(interval.current);
  };

  return {
    start,
    stop,
    currentTimeMs,
  };
};

export { useTimer };
