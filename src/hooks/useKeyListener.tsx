import { useEffect, useRef } from "react";

interface useKeyListenerProps {
  key: string;
  keyEvent: KeyboardEvent["key"];
  handler: (event: KeyboardEvent) => void;
}

interface eventListenerRefProps {
  (event: KeyboardEvent): void;
}

const useKeyListener = ({ key, keyEvent, handler }: useKeyListenerProps) => {
  const eventListenerRef = useRef<eventListenerRefProps>();

  useEffect(() => {
    eventListenerRef.current = (event: KeyboardEvent) => {
      if (event.key === key) {
        handler(event);
      }
    };
  }, [key, handler, keyEvent]);

  useEffect(() => {
    const eventListener = (event: KeyboardEvent) => eventListenerRef.current(event);

    window.addEventListener(keyEvent, eventListener);

    return () => {
      window.removeEventListener(keyEvent, eventListener);
    };
  }, []);
};

export { useKeyListener };
