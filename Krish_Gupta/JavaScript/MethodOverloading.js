class Calculator {

    add(a, b, c) {

        if (c === undefined) {
            return a + b;
        } else {
            return a + b + c;
        }
    }
}

let cal = new Calculator();

console.log(cal.add(10, 20));
console.log(cal.add(10, 20, 30));