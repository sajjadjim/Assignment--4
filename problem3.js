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
  let pass = 0;
  let fail = 0;
  for (let mark of marks) {
    if (mark >= 50) {
      pass++;
    } else {
      fail++;
    }
  }
  return pass > fail;
}

console.log(willSuccess([31, 60, 100]));
