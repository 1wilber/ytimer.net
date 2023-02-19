import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentAvgs } from "@/reducers/timerReducer";

function useAverage(avgTarget) {
  const dispatch = useDispatch()
  const [resultAvg, setResultAvg] = useState(0)
  const currentTimes = useSelector(({timer}) => timer.currentTimes)

  function parseToSeconds(ms) {
    return ms / 1000
  }

  function buildPayload(hTime, lTime, times) {
    return {
      [avgTarget]: {
        highestTime: hTime,
        lowerTime: lTime,
        times
      }
    }
    
  }

  useEffect(() => {
    if (currentTimes.length > 0 && currentTimes.length >= avgTarget) {
      const times = currentTimes.slice(0, avgTarget)
      const sortedTimes = times.sort((a,b) => a.time-b.time)
      const highestTime= sortedTimes[0]
      const lowerTime = sortedTimes[sortedTimes.length - 1]
      const currentAvg = sortedTimes.slice(1, -1).map(t => parseToSeconds(t.time)).reduce((partial, s) => partial + s)
      const result = currentAvg / (avgTarget - 2)
      setResultAvg(result.toFixed(2) * 1000)
      dispatch(setCurrentAvgs(buildPayload(highestTime, lowerTime, times)))
    } else {
      setResultAvg(0)
    }

  },[currentTimes])


  return [resultAvg]
}

export default useAverage
