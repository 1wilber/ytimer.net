import { updateStatus } from "@/reducers/timerReducer"
import { useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

const useTimer = () => {
  const [currentTimeMs, setCurrentTimeMs] = useState(0)
  const [lastTimeMs, setLastTimeMs] = useState(0)
  const dispatch = useDispatch()
  const { status } = useSelector(({ timer }) => timer)

  const interval = useRef(null)
  const start = () => {
    if (status === "running") {
      stop()
    }

    dispatch(updateStatus("running"))
    interval.current = setInterval(() => {
      if (currentTimeMs >= 1000) {
        setCurrentTimeMs(0)
      }
      setCurrentTimeMs((currentTimeMs) => currentTimeMs + 10)
    }, 10)
  }
  const stop = () => {
    setCurrentTimeMs(0)
    setLastTimeMs(currentTimeMs)
    dispatch(updateStatus("stopped"))
    clearInterval(interval.current)
  }

  const reset = () => {
    if (status === "running") {
      dispatch(updateStatus("stopped"))
    }

    clearInterval(interval.current)
    setCurrentTimeMs(0)
  }

  return {
    start,
    stop,
    reset,
    currentTimeMs,
    lastTimeMs,
  }

}

export default useTimer
