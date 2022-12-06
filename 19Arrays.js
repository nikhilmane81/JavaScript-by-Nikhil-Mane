// array = think of it as a variable 
//              that can store multiple values

let fruits = ["apple", "orange", "banana"];

//fruits[2] = "coconut";

//fruits.push("lemon");      //add an element
//fruits.pop();                     //removes last element
//fruits.unshift("mango"); //add element to beginning
//fruits.shift();                   //removes element from beginning

//let length = fruits.length;
//let index = fruits.indexOf("kiwi");

console.log(fruits);


// Looping through arrays
let prices = [5, 10, 15, 20, 25];

/*
for(let i = 0; i < prices.length; i+=1){
    console.log(prices[i]);
}
*/

for(let price of prices){
    console.log(price);
}

// Sort Array of Strings 
let fruits1 = ["banana", "apple", "orange", "mango"];

fruits = fruits.sort();
//fruits = fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit);
}

