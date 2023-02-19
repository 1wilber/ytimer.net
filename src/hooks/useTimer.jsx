import { useState, useRef } from "react"

const useTimer = () => {
  const [currentTimeMs, setCurrentTimeMs] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [lastTimeMs, setLastTimeMs] = useState(0)
  const interval = useRef(null)
  const start = () => {
    setIsRunning(true)
    interval.current = setInterval(() => {
      if (currentTimeMs >= 1000) {
        setCurrentTimeMs(0)
      }
      setCurrentTimeMs((currentTimeMs) => currentTimeMs+10)
    }, 10)
  }
  const stop = () => {
    setCurrentTimeMs(0)
    setLastTimeMs(currentTimeMs)
    setIsRunning(false)
    clearInterval(interval.current)
  }

  const reset = () => {
    if (isRunning) {
      setIsRunning(false)
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
    isRunning
  }

}

export default useTimer