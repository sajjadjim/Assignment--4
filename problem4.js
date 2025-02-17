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

