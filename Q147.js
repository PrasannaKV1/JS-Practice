const car={
    make:'bugati',
    model:'chiron',
    year:2016
};
function displayproperties(car)
{
    for(let property in car)
    {
        console.log(car[property]);;
    }
}
displayproperties(car);
