const productdetails={
    name:"Apple 2020 macbook Air Laptop",
    price:82000,
    color:"Grey",
    hardDisk:"256GB"
};
function product()
{
    console.log(`
      below are the product details 
      name :${this.name},
      price:${this.price},
      color:${this.color},
      harddisk:${this.hardDisk},

        `)
}
// now calling the function 
product.call(productdetails);
