const numbers = [10, 20, 10, 30, 20, 40, 30, 50];

const uniqueNumbers = new Set(numbers);

console.log("Original Array:");
console.log(numbers);

console.log("Unique Values:");
console.log([...uniqueNumbers]);