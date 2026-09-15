const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//take 1st array input from user
rl.question("Enter first array: ",function(input1:string){
    //take 2nd array input from user
    rl.question("Enter second array: ",function(input2:string){
        //convert string input to numeric arrays
        let arr1:number[] = input1.split(" ").map(Number);
        let arr2:number[]=input2.split(" ").map(Number);
        //merge arrays
        let mergedArray: number[] = arr1.concat(arr2);
        //print merged array
        console.log("Merged array:",mergedArray);
        rl.close();
    });
});