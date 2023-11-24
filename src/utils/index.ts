export const msToSeconds = (ms: number) => {
  return ms / 1000;
};

export const secondsToMs = (seconds: number) => {
  return seconds * 1000;
};

export const msToTime = (duration: number) => {
  const milliseconds = Math.floor((duration % 1000) / 10);
  const seconds = Math.floor((duration / 1000) % 60);
  const minutes = Math.floor((duration / (1000 * 60)) % 60);

  const displayMilliseconds =
    milliseconds < 10 ? `0${milliseconds}` : milliseconds;

  if (duration <= 60000) {
    return `${seconds}.${milliseconds}`;
  }

  if (duration > 60000) {
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${displaySeconds}.${displayMilliseconds}`;
  }
};
