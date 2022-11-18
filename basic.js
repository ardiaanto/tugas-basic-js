function calculateMax(a) {
    return a.sort((a, b) => b - a);
}

function calculateMin(a) {
    return a.sort((a, b) => a - b);
}

function slicing(a) {
    let temp;
    temp = a.slice(0, 4);
    return temp;
}

function sum(a) {
    return a.reduce((a, b) => a + b);
}

const numbers = [1, 2, 3, 4, 5];

calculateMax(numbers);
const maxsum = sum(slicing(numbers));

calculateMin(numbers);
const minsum = sum(slicing(numbers));

console.log(minsum + ', ' + maxsum);