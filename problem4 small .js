function validProposal(person1, person2) {
    if (![person1, person2].every(p => typeof p === "object" && !Array.isArray(p)) || person1.gender === person2.gender) {
      return "Invalid";
    }
    return Math.abs(person1.age - person2.age) <= 7;
  }
  
  