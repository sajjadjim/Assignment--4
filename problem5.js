function calculateSleepTime(times) {
  if (!Array.isArray(times)) {
    return "Invalid";
  }
  let totalSeconds = 0;
  for (const time of times) {
    if (typeof time !== "number") {
      return "Invalid";
    }
    totalSeconds = time + totalSeconds;
  }

  return {
    hour: Math.floor(totalSeconds / 3600),
    minute: Math.floor((totalSeconds % 3600) / 60),
    second: totalSeconds % 60,
  };
}

console.log(calculateSleepTime([7200, 1800, 900]));
console.log(calculateSleepTime([3600, 1800, "900"]));
console.log(calculateSleepTime([]));
console.log(calculateSleepTime(100));
console.log(calculateSleepTime(["100"]));
