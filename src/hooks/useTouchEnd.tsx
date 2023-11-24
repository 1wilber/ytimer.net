import { useEffect, useRef } from "react";

// @ts-expect-error TODO: fix types
const useTouchEnd = (current, handler) => {
  const eventListenerRef = useRef();

  useEffect(() => {
    // @ts-expect-error TODO: fix types
    eventListenerRef.current = (event) => {
      handler?.(event);
    };
  }, [handler]);

  useEffect(() => {
    if (current === null) return;

    const eventListener = (event: KeyboardEvent) => {
      // @ts-expect-error TODO: fix types
      eventListenerRef.current(event);
    };

    current.addEventListener("touchend", eventListener);
    return () => {
      current.removeEventListener("touchend", eventListener);
    };
  }, [current]);
};

export default useTouchEnd;
