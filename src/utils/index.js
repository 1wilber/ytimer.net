import sum from 'lodash/sum'

export const msToSeconds = (ms) => {
  return ms / 1000
}

export const secondsToMs = (seconds) => {
  return seconds * 1000
}

export const msToTime = (duration) => {
  let milliseconds = Math.floor((duration % 1000) / 10)
  let seconds = Math.floor((duration / 1000) % 60)
  let minutes = Math.floor((duration / (1000 * 60)) % 60)

  milliseconds = milliseconds < 10 ? `0${milliseconds}` : milliseconds

  if (duration <= 60000) {
    return `${seconds}.${milliseconds}`
  }

  if (duration > 60000) {
    seconds = seconds < 10 ? `0${seconds}` : seconds
    return `${minutes}:${seconds}.${milliseconds}`
  }

}

export const calculateAvg = (currentAvgTimes, avgTarget) => {
  if (currentAvgTimes.length < avgTarget) return 0
  if (!currentAvgTimes.length) return 0

  const currentAvg = currentAvgTimes.sort((a, b) => a.time - b.time).slice(1, -1).map(t => msToSeconds(t.time))

  const result = sum(currentAvg) / (avgTarget - 2)
  return secondsToMs(result)
}

