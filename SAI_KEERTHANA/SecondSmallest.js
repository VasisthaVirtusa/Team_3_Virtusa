const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//enter number of input elements
rl.question("Enter the number of elements:",function(n){
    //enter the elements
    rl.question("Enter the elements: ",function(input){
        let arr = input.split(" ").map(Number);

        //validate n value and number of input elements
        if(arr.length !== Number(n)){
            console.log("Number of elements do not match");
            rl.close();
            return;
        }
        let smallest = Infinity;
        let secondSmallest = Infinity;

        for(let i=0;i<arr.length;i++){
            if(arr[i]<smallest){
                secondSmallest=smallest;
                smallest=arr[i];
            }
            else if(arr[i]<secondSmallest && arr[i] != smallest){
                secondSmallest=arr[i];
            }
        }
        console.log("Second smallest element: ",secondSmallest);
        rl.close();
    })
})