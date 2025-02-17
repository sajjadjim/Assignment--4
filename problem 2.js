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

console.log(validContact(["01100101810"]));
