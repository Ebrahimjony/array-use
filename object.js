
//how to use costructor
//adding function into constructor
//how to use object
//how to use costructor paramitar

function Student(name,age,cgpa,lang)
{
    this.name= name;
    this.age= age;
    this.cgpa=cgpa;
    this.lang=lang;

    this.display=function(){

        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);

    }
}
var student1= new Student("Jony islam",23,3.33,["Bangla","English","Hindi"]);
var student2= new Student("Zakerul islam",27,2.33,["Bangla","English","uthu"]);
var student3= new Student("Imran Hossain ",20,3.53,["Bangla","aroby","Hindi"]);

student1.display();
student2.display();
student3.display();



/*
var name="Jony";
var age=23;
var cgpa=3.45;
var array=["Bangla","English","Hindi"]
console.log(name);
console.log(age);
console.log(cgpa);
console.log(array);
*/

/*
how to use object and print

.......

var student={
name:"Jony",
age:23,
cgpa:3.45,
array:["Bangla","English","Hindi"],
}
console.log(student.name);
*/
