function calculateSleepTime(times) {
    if (!Array.isArray(times) || times.some(t => typeof t !== "number")) return "Invalid";
    let totalSeconds = times.reduce((sum, t) => sum + t, 0);
    return {
      hour: Math.floor(totalSeconds / 3600),
      minute: Math.floor((totalSeconds % 3600) / 60),
      second: totalSeconds % 60,
    };
  }
  
  console.log(calculateSleepTime([3600, 1800, 900])); 
  