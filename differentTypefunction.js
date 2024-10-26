
//function declaration 
function add(a,b)
{
    
    console.log(a+b);
}
//function call 
add(3,4);

//function expression 
const addition =function(a,b)
{
    console.log(a+b);
}

addition(5,6,7);

//ivaga arrow function check madtini
let sub=(a,b)=>a+b;
console.log(sub(4,5));

// arrow function one more practice
const great=(a,b)=>
{
    if(a>b)
    {
        console.log(`${a} is the greater number`)

    }
    else{
        console.log(`${b} is greater value `)
    }
}
great(5,4);
