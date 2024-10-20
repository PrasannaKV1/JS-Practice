function calcaulatedeliverytime(packagetype)
{
    let deliverytime;
    switch(packagetype.toLowerCase())
    {
        case "standard":
            deliverytime ="3-5 Days";
        break;
        case "express":
            deliverytime=" 2-5 Days";
        break;
        case "overnight ":
            deliverytime="nextday";
            break;
            default: deliverytime="not specofied"
            break;

    }
    return deliverytime;
}

const package1="Standard";
const package2="express";
const package3="overnight";
const package4="unknown";


// The MindSet 

console.log(`Delivery Time for ${package1} : ${calculateDeliveryTime(package1)}`);
console.log(`Delivery Time for ${package2} : ${calculateDeliveryTime(package2)}`);
console.log(`Delivery Time for ${package3} : ${calculateDeliveryTime(package3)}`);
console.log(`Delivery Time for ${package4} : ${calculateDeliveryTime(package4)}`);
