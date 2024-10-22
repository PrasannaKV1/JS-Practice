const students=
[

    {
        name:'steve',
        marks:95
    },
    {
        name:"smith",
        marks:75
    },
    {
        name:"Micheal",
        marks:92
    },
    {
        name:"Prasanna",
        marks:29
    }
];
function checkresults(studentname)
{
   let i;
   for(i=0;i<students.length;i++)
   {
    if(students[i].name==studentname && students[i].marks>90)
    {
        console.log(`Congratulation !${students[i].name} ! You Cleared the Exam `)
        break;
    }
    else if(students[i].name==studentname && students[i].marks<90)
    {
        console.log(`Sorry you haven't cleared the exam !`)
        break;
    }


   }

   if(i>students.length)
   {
    console.log("Invalid user");
   }
}
checkresults("steve");
checkresults("Prasanna");