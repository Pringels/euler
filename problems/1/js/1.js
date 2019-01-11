const benchmark = require('../../../utils/js/benchmark')

const n = 1000;

// Simple solution using modulo arithmetic
const sumMultipleModulo = ({number, factors}) => {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        if (factors.some(f => i % f === 0)) {
            sum += i; 
        }
    }
    return sum;
}

// Using formulae for arithmetic progressions
const sumMultipleFormula = ({number, factors}) => {
    const sumFactor = f => {
        let s = Math.floor(number / f);
        let l = f + ((s - 1) * f);
        return s * (f + l) / 2
    }
    
    return factors
        .map(sumFactor)
        .reduce((acc, curr) => acc += curr, 0) - sumFactor(
            factors.reduce((acc, curr) => acc * curr, 1)
        )
}

benchmark([
    () => sumMultipleModulo({
        number: n,
        factors: [3, 5]
    }),
    () => sumMultipleFormula({
        number: n,
        factors: [3, 5]
    })
]);


