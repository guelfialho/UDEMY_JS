'use strict'

const temperatures = [3,-2,9,-1,'error',9,13,17,15,-6,9,5];





let minimumTemperature
let maximumTemperature
let aux
let aux2

for(let i = 0; i < temperatures.length; i++) {
    if(typeof(temperatures[i]) === 'number') {
        if(i === 0) {
            minimumTemperature = temperatures[i]
            maximumTemperature = temperatures[i]
            continue
        } 
        aux = temperatures[i]
        aux2 = temperatures[i]
        
        if (aux > maximumTemperature) {
            maximumTemperature = aux
        }

    
        if (aux < minimumTemperature) {
            minimumTemperature = aux
        }
    }
}

console.log(maximumTemperature)
console.log(minimumTemperature)

const amplitude = Math.abs(minimumTemperature - maximumTemperature)

console.log(amplitude)

