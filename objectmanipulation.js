const car ={
    make :"bugati",
    model :"Chrion",
    year :2023
};
function displayproperties()
{
    for(let property in car)
    {
        console.log(car[property]);
    }
}
displayproperties();