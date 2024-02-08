import { useKeyListener } from "@/hooks";
import { useTimerViewController } from "./timer.view.controller";
import { Typography } from "@mui/material";

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

  return <Typography variant='h3'>{currentTimeMs}</Typography>
};

export { TimerView };
