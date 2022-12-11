/*
When it comes to inheritance, JavaScript only has one construct: objects. 
Each object has a private property which holds a link to another object called its prototype. 
That prototype object has a prototype of its own, 
and so on until an object is reached with null as its prototype. By definition, null has no prototype, 
and acts as the final link in this prototype chain. 
It is possible to mutate any member of the prototype chain or even swap out the prototype at runtime, 
so concepts like static dispatching do not exist in JavaScript.
*/
class Animal
{
    life;
    constructor(name)
    {
        this.life = true;
        //console.log("Alive");
        this.name = name;
    }
    eat()
    {
        console.log(`${this.name} is able to eat`);
    }
}
class Cat extends Animal
{
    constructor(name, age)
    {
        super(name); //Super keyword refers to parent class, Commonly used to invoke constructor of parent class
        this.age = age;
    }
    run()
    {
        console.log(`${this.name} is running and her age is ${this.age} months`);
    }
}
class Dog extends Animal
{
    constructor(name, age)
    {
        super(name);
        this.age = age;
    }
    bark()
    {
        console.log(`${this.name} is barking and his age is ${this.age} months`);
    }
}
const catobject = new Cat('Kitty',12);
const dogobject = new Dog('doggo',6);

console.log(catobject.life);
catobject.eat();
catobject.run();

console.log(dogobject.life);
dogobject.eat();
dogobject.bark();

