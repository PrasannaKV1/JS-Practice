const list =[1,2,"prasanna",5678,undefined];
for(let i=0;i<list.length;i++)
{
    if(typeof list[i]===typeof ("string"))
    {
        console.log(list[i]);
        break;
    }
}