const bill = 275;
const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill; // the ternary operator is useful for oneline conditionals
let finalBill = bill + tip;

const result = `The bill was $${bill}, the tip was $${tip}, and the total value $${finalBill}`;
console.log(result);