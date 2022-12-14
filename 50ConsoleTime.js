// console.time() = Starts a timer you can use to 
//                               track how long an operation takes
//                              Give each timer a unique name.

//start
console.time("Response time");

alert("CLICK THE OK BUTTON!");
//setTimeout(() => console.log("HELLO!"), 3000);

//end
console.timeEnd("Response time")


/*
IMP Note : Console.time function will only calculate the time required for Synchronous functions.
If you have any Async function, time required for its execution will not be considered 
*/