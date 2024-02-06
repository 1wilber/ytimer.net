import useTimer from "@/hooks/useTimer";
import useKeyUp from "@/hooks/useKeyUp";
import { msToTime } from "@/utils";
import { useEffect, useState } from "react";
import useTouchEnd from "@/hooks/useTouchEnd";
import "./create-time.styles.css";
import { fetchScramble } from "@/reducers/scramblerReducer";
import { addResult } from "@/reducers/timerReducer";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

interface CreateTimeProps {
  container: React.MutableRefObject<null>;
}

export const CreateTime = (props: CreateTimeProps) => {
  const dispatch = useAppDispatch();
  const { container } = props;

  const { start, stop, lastTimeMs, currentTimeMs } = useTimer();
  const [loading, setLoading] = useState(true);
  const { currentScramble } = useAppSelector(({ scramble }) => scramble);
  const { event, status, results } = useAppSelector(({ timer }) => timer);

  function handleStop() {
    stop();
    dispatch(
      addResult({
        id: results.length + 1,
        time: currentTimeMs,
        scramble: currentScramble,
        event,
        createdAt: Date.now(),
      }),
    );
    dispatch(fetchScramble(event));
  }

  useEffect(() => {
    if (loading) setLoading(false);
    if (loading) return;

    dispatch(fetchScramble(event));
  }, [loading, event]);

  useTouchEnd(container.current, () => {
    status === "running" ? handleStop() : start();
  });

  useKeyUp(" ", () => {
    status === "running" ? handleStop() : start();
  });

  return (
    <p className="text-6xl md:text-8xl font-extrabold">
      {status === "running" ? msToTime(currentTimeMs) : msToTime(lastTimeMs)}
    </p>
  );
};
