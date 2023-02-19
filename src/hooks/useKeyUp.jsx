import { useEffect, useRef } from "react"
import shimKeyboardEvent from "../shimKeyboardEvent"

const useKeyUp = (keys, handler) => {

  const eventListenerRef = useRef();

  useEffect(() => {
    eventListenerRef.current = (event) => {
      shimKeyboardEvent(event);
      if (Array.isArray(keys) ? keys.includes(event.key) : keys === event.key) {
        handler?.(event);
      }
    };
  }, [keys, handler]);

  useEffect(() => {
    const eventListener = (event) => {
      eventListenerRef.current(event);
    };
    window.addEventListener('keyup', eventListener);
    return () => {
      window.removeEventListener('keyup', eventListener);
    };
  }, []);

}

export default useKeyUp