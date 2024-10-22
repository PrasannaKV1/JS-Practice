function calculate(...parameters)
{
    let sum=0;
    for(let i of parameters)
    {
        sum+=i;

    }
    return sum;

}
let result=calculate(13,34,56,56);
console.log(result);