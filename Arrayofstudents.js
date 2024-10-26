//Array of objects
const students=[
    {
        name:"steve",
        marks:90
    },
    {
        name:"smith",
        marks:90
    },
    {
        name:"prasanna",
        marks:60,
    },
    {
        name:"pooja",
        marks:55,
    }
]

// function to manipulate on array of objects
function checkresults(studentName)
{
    for(let i=0;i<students.length;i++)
    {
        if(students[i].name==studentName && students[i].marks>50)
        {
            console.log(`Congrats ${students[i].name} , you have cleared the exam `)
        }
        else if (students[i].name==studentName && students[i].marks>70)

        {
             console.log(`Congrats buddy you also passed the exam ${students[i].name} , you are passed the exam `)
        }
    }
}
checkresults("prasanna");
