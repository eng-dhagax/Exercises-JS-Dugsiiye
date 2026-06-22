// Exercise 25
console.log("Spread Operator");
let numbers = [1,2,3];

let newNumbers = [...numbers, 4,5,6];

console.log(newNumbers);

console.log("---");

console.log("Rest Operator");
function multiply (...number) {

    return number.reduce((total,num) => total * num, 1);

};

console.log(multiply(2,2,509))