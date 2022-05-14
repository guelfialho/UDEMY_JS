'use strict';

let bills = [125, 555, 44];
let finalBills = [];

const calcTip = function (bill) {
	return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
};

for (let i = 0; i < bills.length; i++) {
	finalBills[i] = bills[i] + calcTip(bills[i]);
}

console.log(finalBills);
