import { useTimer } from "@/hooks";
import { TimerStatuses } from "@/models/timer-statuses.model";
import { useState } from "react";

const useTimerViewController = () => {
  const { start, stop, currentTimeMs } = useTimer();
  const [status, setStatus] = useState<TimerStatuses>(TimerStatuses.stopped);

  const onSpaceDown = () => {
    if (status === TimerStatuses.running) {
      stop();
      setStatus(TimerStatuses.finished);
      return;
    }

    if (status === TimerStatuses.stopped) {
      start();
      setStatus(TimerStatuses.running);
      return;
    }
  };

  const onSpaceUp = () => {
    if (status === TimerStatuses.finished) {
      setStatus(TimerStatuses.stopped);
    }
  };

  return {
    onSpaceDown,
    onSpaceUp,
    currentTimeMs,
  };
};

export { useTimerViewController };
