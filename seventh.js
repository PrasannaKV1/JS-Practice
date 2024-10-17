let val;
val=`document`;
console.log(val);

a=10;
b=`10`;
if(a==b)
{
    console.log(`Both are equal ${a} and ${b}`);
}
else 
{
    console.log(`Both are not equal`)
}

let time=1;
if(time>=0 && time<=12)
{
    console.log(`Good Morning`)
}
else if(time >12 && time<=17)
{
    console.log(`"Good Afternoon"`);
}
else if (time >17 && time <=24)
{
    console.log("Good evening")
}
else 
{
    console.log(`Please enter the valid input`);
}

 let fridge={};
 console.log(fridge);

 // now i intilize the object 
 fridge.eggs=20;
 fridge.onion='1 KG';
 fridge.vegetables="cucumber";
 console.log(fridge);

 //creating fully loaded object 

 let mobile={
    brand:"Iphone 16",
    color:"Gold",
    cost:66666,
    isInsured:false
 };

 console.log(mobile)

 console.log(`Mobile Brand is : ${mobile.brand}`);


 // one more way of accessing the object properties is 

 console.log(`Mobile cost is : ${mobile['cost']}`);


// nested objects

let student=
{
    name:"Prasanna K V",
    faher:"Veeraiah K M",
    mother:"kalavathi",
    course:{
        name:"Enineering",
        year:"4th",
        rank:"528th"
    },
    college:
    {
        name:"GMIT",
        loc:"Davnagere",
        pincode:583131
    }
};
console.log(student);
// fetching the object within the 

console.log(student.college.name);

