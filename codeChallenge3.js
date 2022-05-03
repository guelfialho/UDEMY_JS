// dolphins
dolphins1 = 96
dolphins2 = 108
dolphins3 = 89

//koalas

koalas1 = 88
koalas2 = 91
koalas3 = 113


averageKoalas = (koalas1 + koalas2 + koalas3) / 3
averageDolphins = (dolphins1 + dolphins2 + dolphins3) / 3

if (averageKoalas > averageDolphins) {
    console.log(`the winner of the competition is Koalas (average = ${averageKoalas.toFixed(2)})`);
    console.log(`Dolphins: ${averageDolphins.toFixed(2)}`);
    console.log(`Koalas: ${averageKoalas.toFixed(2)}`);
} else if (averageKoalas < averageDolphins) {
    console.log(`the winner of the competition is Dolphins (average = ${averageDolphins.toFixed(2)})`);
    console.log(`Dolphins: ${averageDolphins.toFixed(2)}`);
    console.log(`Koalas: ${averageKoalas.toFixed(2)}`);
} else {
    console.log(`there's no winner of the competition. It's a draw!`);
    console.log(`Dolphins: ${averageDolphins.toFixed(2)}`);
    console.log(`Koalas: ${averageKoalas.toFixed(2)}`);
}
