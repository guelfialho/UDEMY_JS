// johnMass = 85; // kg
// johnHeight = 1.76; // meters
// marksMass = 95; //kg
// marksHeight = 1.88; // meters

johnMass = 92; // kg
johnHeight = 1.95; // meters
marksMass = 78; //kg
marksHeight = 1.69; // meters

johnBMI = johnMass / (johnHeight * johnHeight);
marksBMI = marksMass / (marksHeight * marksHeight);

markHigherBMI = marksBMI > johnBMI;

if (markHigherBMI) {
  console.log(`Mark's BMI (${marksBMI.toFixed(2)}) is higher than John's! (${johnBMI.toFixed(2)})`);
} else {
  console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's! (${marksBMI.toFixed(2)})`);
}


