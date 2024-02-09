import { useKeyListener } from "@/hooks";
import { useTimerViewController } from "./timer.view.controller";
import { Text } from "@chakra-ui/react";

const TimerView = () => {
  const { currentTimeMs, onSpaceDown, onSpaceUp } = useTimerViewController();

  useKeyListener({
    key: " ",
    keyEvent: "keydown",
    handler: onSpaceDown,
  });

  useKeyListener({
    key: " ",
    keyEvent: "keyup",
    handler: onSpaceUp,
  });

  return <Text fontSize="6xl">{currentTimeMs}</Text>;
};

export { TimerView };
