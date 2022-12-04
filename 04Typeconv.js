/*let age = window.prompt("Enter number to find the square of it");
console.log(typeof age);
age = Number(age);
age *= age;
console.log(age);

x = Number("3.12");
y = String(3.14);
z = Boolean("potato"); //Will result false when string is empty, if not will then will be true*/

//const = A variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of the circle");
radius = Number(radius);

circumference = 2 * PI * radius;

document.getElementById("ans").innerHTML = "Ans is "+circumference;

