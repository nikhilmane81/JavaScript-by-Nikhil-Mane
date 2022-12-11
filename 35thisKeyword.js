/*
this keyword in javascript always holds the reference to a single object, 
that defines the current line of code’s execution context. Functions, in JavaScript,
 are essentially objects. 
 Like objects, they can be assigned to variables, passed to other functions, 
 and returned from functions. And much like objects, they have their own properties.
  One of these properties is this.

The value that this store is the current execution context of the JavaScript program. 
Thus, when used inside a function this value will change depending on how that function is defined,
 how it is invoked and the default execution context.
--> this keyword will refer to different objects depending upon how it is used. 

Functions, in JavaScript, can be invoked in multiple ways  :

this with function invocation:
Function invocation refers to the process of invoking a function using its name or an expression 
that evaluates the function object followed by a set of opening and 
closing first brackets(the inclusion of the brackets indicates that we are asking the 
JavaScript engine to execute the function immediately).
*/
console.log(this); //Here this is referring to window object as it is immediate context
const car1 = {
    model:"Mustang",
    color:"red",
    year:2023,

    drive : function(){
        console.log(`You drive the ${this.model}`); //Here this is referrring to car1 object
    }
}
const car2 = {
    model:"Corvette",
    color:"blue",
    year:2024,

    drive : function(){
        console.log(`You drive the ${this.model}`); //Here this is referring to car2 object
    }
}

car1.drive();
car2.drive()