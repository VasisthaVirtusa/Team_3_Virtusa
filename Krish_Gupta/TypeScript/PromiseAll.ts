async function getData() {

    const api1 = fetch("https://jsonplaceholder.typicode.com/posts/1");
    const api2 = fetch("https://jsonplaceholder.typicode.com/posts/2");
    const api3 = fetch("https://jsonplaceholder.typicode.com/posts/3");

    const responses = await Promise.all([api1, api2, api3]);

    const data1 = await responses[0].json();
    const data2 = await responses[1].json();
    const data3 = await responses[2].json();

    console.log("First API:");
    console.log(data1);

    console.log("Second API:");
    console.log(data2);

    console.log("Third API:");
    console.log(data3);
}

getData();