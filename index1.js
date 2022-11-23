// Design pattern problem - 
// How will you design a Student class which stores the name , age , phone number, board marks of each student. 
// Make a constructor to initialize the values.
// Write a function to check whether the student is egligible or not for college. 
// If board marks > 40 -> egligible , if less than 40 -> not egligible.Write a function to check this.

class Student{
    constructor(name,age,phone,mrks)
    {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.mrks = mrks
    }
    addmissionCheck()
    {
        if(this.mrks >= 40)
        {
            console.log('egligible');
        }
        else
        {
            console.log('not egligible');
        }
    }
}

const chotu = new Student('chotu', 17, 46546546, 41);
const chutki = new Student('chutki', 21, 79878465, 32);

chotu.addmissionCheck();
chutki.addmissionCheck();


