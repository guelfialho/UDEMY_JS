'use strict'

const temperatures = [3,-2,9,-1,'error',9,13,17,15,-6,9,5];

function calcTemperatureAmplitude(array) {

let minimumTemperature
let maximumTemperature
let aux

for(let i = 0; i < array.length; i++) {
    if(typeof(array[i]) === 'number') {
        if(i === 0) {
            minimumTemperature = array[i]
            maximumTemperature = array[i]
            continue
        } 
        aux = array[i]
        
        if (aux > maximumTemperature) {
            maximumTemperature = aux
        }

    
        if (aux < minimumTemperature) {
            minimumTemperature = aux
        }
    }
}

const amplitude = Math.abs(minimumTemperature - maximumTemperature)
return (amplitude)
}


console.log(calcTemperatureAmplitude(temperatures))


