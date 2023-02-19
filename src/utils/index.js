import generateScrambleSync from "@/utils/generateScrambleSync"

const msToTime = (duration) => {
  if (duration <= 60000) {
    const milliseconds = Math.floor((duration % 1000) / 10)
    let seconds = Math.floor((duration / 1000) % 60)
    const millisecondsFormat = String(milliseconds).length === 2 ? String(milliseconds) : `0${milliseconds}`

    return `${seconds}.${millisecondsFormat}`
  }


  // let minutes = Math.floor((duration / (1000 * 60)) % 60)
  // let hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
  //
  // hours = (hours < 10) ? "0" + hours : hours;
  // minutes = (minutes < 10) ? "0" + minutes : minutes;
  //
  // console.log({duration});
  //
  // return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

export {
  msToTime,
  generateScrambleSync
}
