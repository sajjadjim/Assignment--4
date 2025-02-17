function calculateVAT(price) {
  if (typeof price !== "number" || isNaN(price) || price <= 0) {
    return "Invalid";
  } else {
    const vaT_Rate = 7.5;
    const TotalAmount = (price * vaT_Rate) / 100;
    return TotalAmount;
  }
}

function validContact(contact) {
  if (typeof contact !== "string") {
    return "Invalid";
  } else if (contact.length !== 11) {
    return "Invalid";
  } else if (!contact.startsWith("01")) {
    return false;
  } else if (contact.includes(" ")) {
    return "Invalid";
  } else {
    return true;
  }
}

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

function validProposal(person1, person2) {
  if (Array.isArray(person1) || Array.isArray(person2)) {
    return "Invalid";
  }
  if (typeof person1 !== "object" || typeof person2 !== "object") {
    return "Invalid";
  }
  if (person1.gender === person2.gender) {
    return false;
  }
  const ageGap = Math.abs(person1.age - person2.age);
  if (ageGap > 7) {
    return false;
  }
  return true;
}

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
