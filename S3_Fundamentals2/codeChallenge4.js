'use strict';

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let finalBills = [];

const calcTip = function (bill) {
	return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
};

for (let i = 0; i < bills.length; i++) {
	finalBills[i] = bills[i] + calcTip(bills[i]);
}

console.log(finalBills);

const calcAverageArray = function (array) {
	let total = 0;
	let avarege = 0;
	for (let i = 0; i < array.length; i++) {
		total += array[i];
	}

	avarege = total / array.length;
	return avarege;
};

console.log(calcAverageArray(bills));
