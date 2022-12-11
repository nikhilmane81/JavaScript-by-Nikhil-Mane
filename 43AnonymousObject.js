//Self explainatory
class Student {
    constructor(subject, marks) {
        this.subject = subject;
        this.marks = marks;
    }
}
let list = [
    new Student('Phy', 45), //Object with no reference
    new Student('math', 55),
    new Student('chem', 43),
    new Student('geo', 65),
    new Student('economics', 78),
    new Student('CS', 89)
];
list.forEach(show => console.log(`Subject is ${show.subject} and marks obtained are ${show.marks}`))