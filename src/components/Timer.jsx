import { useDispatch, useSelector } from "react-redux"
import { generate } from "@/reducers/scramblerReducer"
import useTimer from '@/hooks/useTimer'
import useKeyUp from '@/hooks/useKeyUp'
import { msToTime } from '@/utils'
import {useEffect} from "react"
import { addTime } from "@/reducers/timerReducer"

function Timer() {
  const { start, stop, lastTimeMs, currentTimeMs, isRunning } = useTimer()
  const dispatch = useDispatch()
  const currentScramble = useSelector(state => state.scrambler.currentScramble)
  function buildPayload() {
    return {
      time: currentTimeMs,
      scrambler: currentScramble,
      created_at: Date.now()
    }
  }

  const styles = {
    timerText: {
      fontFamily: "sans-serif",
      fontWeight:"bold",
      fontSize: "7em"
    }
  }

  function handleStop() {
    dispatch(addTime(buildPayload()))
    stop()
    dispatch(generate())
  }

  useEffect(() => {
    dispatch(generate())
  }, [])

  useKeyUp(" ", (_e) => {
    isRunning ? handleStop() : start()
  })

  return (<h1 style={styles.timerText}>{isRunning ? msToTime(currentTimeMs) : msToTime(lastTimeMs)}</h1>)
}

export default Timer
