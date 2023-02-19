function getTimes() {
  return JSON.parse(window.localStorage.getItem("times")) || []
}

function saveTimes(payload) {
  window.localStorage.setItem("times", JSON.stringify(payload))
}

function removeTime(time) {
  const currentTimes = getTimes()
  const newTimes = currentTimes.filter((currentTime) => currentTime.created_at != time.created_at)
  window.localStorage.setItem("times", JSON.stringify(newTimes))
}

function removeAllTime() {
  window.localStorage.setItem("times", JSON.stringify([]))
}

export {
  saveTimes,
  getTimes,
  removeTime,
  removeAllTime
}
