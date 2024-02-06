import { useEffect, useRef } from "react";
import shimKeyboardEvent from "../shimKeyboardEvent";

// @ts-expect-error TODO: remove this
const useKeyUp = (keys, handler) => {
  const eventListenerRef = useRef();

  useEffect(() => {
    // @ts-expect-error TODO: remove this
    eventListenerRef.current = (event) => {
      shimKeyboardEvent(event);
      if (Array.isArray(keys) ? keys.includes(event.key) : keys === event.key) {
        handler?.(event);
      }
    };
  }, [keys, handler]);

  useEffect(() => {
    const eventListener = (event: KeyboardEvent) => {
      // @ts-expect-error TODO: remove this
      eventListenerRef.current(event);
    };
    window.addEventListener("keyup", eventListener);
    return () => {
      window.removeEventListener("keyup", eventListener);
    };
  }, []);
};

export default useKeyUp;
