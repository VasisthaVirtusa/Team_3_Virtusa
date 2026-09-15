async function callAPIs(){
    //try catch block to handle errors 
    try{
        //Using testing endpoints from jsonplaceholder
        const response1 = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data1 = await response1.json();
        console.log("API 1:",data1.name);
        const response2 = await fetch("https://jsonplaceholder.typicode.com/users/2");
        const data2 = await response2.json();
        console.log("API 2:",data2.username);
        const response3 = await fetch("https://jsonplaceholder.typicode.com/users/3");
        const data3 = await response3.json();
        console.log("API 3:",data3.email);
    }catch(error){
        console.log("Error:",error);
    }
}
callAPIs();