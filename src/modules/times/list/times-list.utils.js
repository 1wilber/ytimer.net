import { msToTime } from "@/utils"

function isCurrentAvg(currentAvgTimes, t) {
  if (!currentAvgTimes?.times?.length) {
    return false
  }

  return currentAvgTimes.times.some(time => time.id === t.id)
}

function timeFormat(t) {
  // if (Object.keys(currentAvgTimes).length === 0) {
  //   return msToTime(t.time)
  // }

  // if (t.id === currentAvgTimes.lowerTime.id || t.id === currentAvgTimes.highestTime.id) {
  //   return `( ${msToTime(t.time)} )`
  // }

  return msToTime(t.time)
}

export {
  isCurrentAvg,
  timeFormat,
}
