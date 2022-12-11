class Student
{
    constructor(name, rollNo)
    {
        this.name = name;
        this.rollNo = rollNo;
    }
}
const obj1 = new Student('Rahul',1);
const obj2 = new Student('Audrey',2);
const obj3 = new Student('Sneha',3);

function display(obj)
{
    console.log(`Name of student is ${obj.name}`);
    console.log(`Roll number of student is ${obj.rollNo}`);
}
display(obj1);
display(obj2);
display(obj3);