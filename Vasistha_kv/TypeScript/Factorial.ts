function factorial(n: number): number {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }

    return fact;
}

let number = 5;

console.log("Factorial = " + factorial(number));