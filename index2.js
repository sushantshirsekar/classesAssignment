// Create 5 students with different names and age.
// Write a function which keep track of the number of students created. 
// Have you heard of static variables. Leverage that now.

class createStudent{
    static count = 0;
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
        createStudent.count = createStudent.count + 1;
    }


}


const shinchan  = new createStudent('Shinchan', 5);
const kazama = new createStudent('Kazama', 6);
const masaw = new createStudent('Masaw', 5);
const mitsi = new createStudent('Mitsi' , 30);
const harry = new createStudent('Harry', 32);

console.log(createStudent.count);
