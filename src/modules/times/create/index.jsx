import { useDispatch, useSelector } from "react-redux"
import useTimer from '@/hooks/useTimer'
import useKeyUp from '@/hooks/useKeyUp'
import { msToTime } from '@/utils'
import { useEffect, useState } from "react"
import { addTime } from "@/reducers/timerReducer"
import useTouchEnd from "@/hooks/useTouchEnd"
import './create-time.styles.css'
import { Typography } from "@mui/material"
import { fetchScramble } from "@/reducers/scramblerReducer"


export const CreateTime = (props) => {
  const { container } = props
  const { start, stop, lastTimeMs, currentTimeMs } = useTimer()
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const {currentScramble} = useSelector(({ scrambler }) => scrambler)
  const {currentTimes} = useSelector(({ timer }) => timer)
  const { currentEvent, timerStatus } = useSelector(({ timer }) => timer)

  function buildPayload() {
    return {
      id: currentTimes.length + 1,
      time: currentTimeMs,
      scrambler: currentScramble,
      event: currentEvent,
      created_at: Date.now()
    }
  }

  const styles = {
    timerText: {
      fontWeight: "bold",
      fontSize: { xs: "4em", md: "7em" },
      textAlign: "center",
      userSelect: "none",
    }
  }

  function handleStop() {
    stop()
    dispatch(addTime(buildPayload()))
    dispatch(fetchScramble(currentEvent))
  }

  useEffect(() => {
    if (loading) setLoading(false)

    if (loading) return
    dispatch(fetchScramble(currentEvent))
  }, [loading, currentEvent])

  useTouchEnd(container.current, () => {
    timerStatus === "running" ? handleStop() : start()
  })

  useKeyUp(" ", (_e) => {
    timerStatus === "running" ? handleStop() : start()
  })

  return (
    <Typography color="text.primary" sx={styles.timerText} variant="h2" fontFamily="'Space Mono', monospace;">
      {timerStatus === "running" ? msToTime(currentTimeMs) : msToTime(lastTimeMs)}
    </Typography>
  )
}

