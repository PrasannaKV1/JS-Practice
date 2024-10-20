const student={
    name:"Prasanna",
    age:22,
    branch:"ECE",
    CGPA:6.68,
    isEnrolled:true
}
for(const proper in student)
{
    if(student.hasOwnProperty(proper))
    {
        const value=student[proper];
        if(typeof value=="string")
        {
            console.log(`${proper} (string):${value.toLocaleUpperCase}`)
        }
        
    }
}