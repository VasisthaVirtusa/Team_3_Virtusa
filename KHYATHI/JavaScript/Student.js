class Student {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    displayDetails() {
        console.log("Student Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Course: " + this.course);
    }
}

const student1 = new Student("Khyathi", 22, "Computer Science");

student1.displayDetails();