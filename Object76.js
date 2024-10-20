function displaystudentinfo(student)
{
    for(const property in student )
    {
        if(student.hasOwnProperty(property))
        {
            console.log(`Property:${property},value:${student[property]}`)
        }
    }
}

const student={
    name:'Prasanna K V',
    age:22,
    major:"Computer Science",
    GPA:6.9,
    isenrolled:true
};
displaystudentinfo(student);