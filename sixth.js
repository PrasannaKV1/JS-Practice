let fridge={};
console.log(fridge);
fridge.eggs=20;
fridge.veg="Tomato";
fridge.fruits="Apple";
console.log(fridge);

let mobile={
    brand:"Apple",
    cost :40000,
    color:"silver",
    isinsured:false

};
console.log(mobile);

function result(a ,b)
{
    let calresult={
        sum:a+b,
        sub:a-b,
        mul:a*b,
        div:a/b
    };
    return calresult;

}
console.log(result(20,10));


let phone ={
    brand:"iphone",
    cost:20000,
    model:2020,
    color:"silver"
}

function display(phone)
{
    console.log(`brand:${phone.brand} cost:${phone.cost} model:${phone.model} color:${phone.color}`);
}
display(phone);
let pivalue=Math.PI;
console.log(pivalue);
let sqrt=Math.sqrt(144);
console.log(sqrt);
let min=Math.min(67,66,54);
console.log(min);
let max=Math.max(56,77,89,32);
console.log(`Max Value:${max}`)
let rand =Math.round(Math.random*1000);
console.log(`rounded value is:${rand}`);

//Date Object is 
let date =new Date();
console.log(date);

let date1=new Date().toLocaleDateString();
console.log(`Date1 is:${date1}`);
let date2=new Date().toLocaleTimeString();
console.log(`date2:${date2}`);