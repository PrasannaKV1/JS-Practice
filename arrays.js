const shoppingcart=['honey','juice','banana','jockey'];
if(!shoppingcart.includes('meat'))
{
    shoppingcart.push('meat')
}
if(!shoppingcart.includes("pen"))
{
    shoppingcart.unshift('pen');
}
console.log(shoppingcart)
const ishoenyallergic=true;
if(ishoenyallergic)
{
    const honeyindex=shoppingcart.indexOf('honey')
    if(honeyindex!=-1)
    {
        shoppingcart.splice(honeyindex,1);
    }
}
console.log(shoppingcart);