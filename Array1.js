const arr=[1,2,"steve","smith",1234,undefined];
for(let i=0;i<arr.length;i++)
{
    if(typeof(arr[i])==typeof('string'))
    {
        console.log(arr[i]);
    }
}