function willSuccess(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  if (!marks.every((mark) => typeof mark === "number")) {
    return "Invalid";
  }
  if (marks.length === 0) {
    return false;
  }
  let passCount = 0;
  let failCount = 0;
  for (let mark of marks) {
    if (mark >= 50) {
      passCount++;
    } else {
      failCount++;
    }
  }
  return passCount > failCount;
}
