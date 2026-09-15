const readline=require("readline");

const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter minimum value: ",function(min){
    rl.question("Enter maxiimum value: ",function(max){
        min=Number(min);
        max=Number(max);
        let randomNumber=Math.floor(Math.random()*(max-min+1))+min;
        console.log("Random number: ",randomNumber);
        rl.close();
    })
})