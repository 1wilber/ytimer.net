import { useEffect, useRef } from "react"

const useTouchEnd = (current, handler) => {

  const eventListenerRef = useRef();

  useEffect(() => {
    eventListenerRef.current = (event) => {
      handler?.(event);
    };
  }, [handler]);

  useEffect(() => {
    if (current === null) return;

    const eventListener = (event) => {
      eventListenerRef.current(event);
    };

    current.addEventListener('touchend', eventListener);
    return () => {
      current.removeEventListener('touchend', eventListener);
    };
  }, [current]);

}

export default useTouchEnd
