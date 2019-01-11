
let newSum = 0;

const n = 1000;
const d1 = 3;
const d2 = 5;

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

const benchmark = fns => 
    fns.forEach(fn => {
        console.log('------------')
        let name = fn.toString();
        name = name.substr('function '.length);
        name = name.substr(0, name.indexOf('('));
        console.log('\x1b[33m%s\x1b[0m', name)
        console.time('Duration');
        const res = fn();
        console.timeEnd('Duration');
        console.log('\x1b[32m%s\x1b[0m', `Result: ${res}`);
    })


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


