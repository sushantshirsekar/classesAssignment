// Take the student class which you made up and write a function called egligible for placements \
// which basically takes the minimum board marks required by a candidate to sit for the company coming for placement 
// and it returns a fat arrow function.
// The fat arrow function takes age as an argument and 
// returns true if the given student has board marks greater than minimum board marks required by company 
// and is above the required age set by the company.[If stuck check the hint 2]
// Run the code across all the students and print the names of egligible students.

class StudentEligibility
{
    constructor(name, age, marks)
    {
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    eligible(minMarks)
    {
        return (minAge) =>{
            if(this.marks > minMarks && this.age > minAge) console.log(`${this.name} is eligible for placement`);
            else console.log(`${this.name} is not eligible for placement`);
        }
    }
    
}

let me = new StudentEligibility('Sushant' , 22, 100);
let other = new StudentEligibility('Anyone', 18, 36);

me.eligible(50)(21);
other.eligible(50)(21);





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
