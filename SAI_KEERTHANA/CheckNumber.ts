const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

//Take input from user
rl.question("Enter a number: ",function(input: string){
    let num: number=Number(input);
    //if number is integer
    if(Number.isInteger(num)){
        console.log("Number is an Integer");
        //if number is floating point
    }else{
        console.log("Number is a floating point number");
    }
    rl.close();
});