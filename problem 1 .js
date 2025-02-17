function calculateVAT(price) {
  if (typeof price !== "number" || isNaN(price) || price <= 0) {
    return "Invalid";
  } else {
    const vaTRate = 7.5;
    const TotalAmount = (price * vaTRate) / 100;
    return TotalAmount;
  }
}
console.log(calculateVAT("100"));
