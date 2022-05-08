
const calcAverage3 =  (a,b,d) => (a + b + d) / 3;

let avgDolphins = calcAverage3(85,54,41);
let avgKoalas = calcAverage3(23,34,27);

function checkWinner(avgDolphins, avgKoalas) {
    if(avgDolphins > 2 * avgKoalas) {
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`
    } else if(avgKoalas > 2 * avgDolphins) {
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`
    } else {
        return `No one wins`
    }
}

console.log(checkWinner(avgDolphins,avgKoalas));

avgDolphins = calcAverage3(23,34,27);
avgKoalas = calcAverage3(85,54,41);

console.log(checkWinner(avgDolphins,avgKoalas));