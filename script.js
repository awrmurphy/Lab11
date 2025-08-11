
class ProductProperties{
    constructor(name,price,quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    }
    getTotalValue(){
        return (`The total value of all ${this.name}'s is: \$`+this.price*this.quantity);
    }
    toString(){
        return (`Product: ${this.name}, Price: ${this.price.toFixed(2)}, Qunatity: ${this.quantity}.`);
    
    }
    static applyDiscount(products,discount){
        products.forEach(element => {
            element.price = element.price - (element.price*discount);
        });
    }
}
    class Perishables extends ProductProperties{
        constructor(name,price,quantity,expiryDate){
        super(name,price,quantity);
        this.expiryDate = expiryDate;
        }
        toString(){
            return (`Product: ${this.name}, Price: \$${this.price.toFixed(2)}, Qunatity: ${this.quantity}, Expiration Date: ${this.expiryDate}.`);
        }
    }

    class StoreInventory{
        constructor(array){
            this.inventory = array;
        }
        addProduct(product){
            //it push
            this.inventory.push(product);
        }
        getInventoryValue(){
            //adds the value of each item multiplied by quantity of that item to a counter variable
            var total=0;
            this.inventory.forEach(element =>{
                total = (total + (element.price*element.quantity));
            })
            return total;
        }
        findProduct(name){ 
           // searches the store to find where the item you are looking for is and returns all the details about that item
           var i;
           this.inventory.forEach(el =>{
            
            if(el.name === name){
                i = this.inventory.indexOf(el);
            }
           });

           if (i!=-1){
            return this.inventory[i];
           }
           else
            {
            i=null;
            return i;
           }
        }
    }

    let Apples = new Perishables('Apple',0.89,300,'Tuesday August 18th 2025');
    // console.log(Apples.toString());
    // console.log(Apples.getTotalValue());

    let Oranges = new Perishables('Orange', 0.79,300,'Tuesday August 18th 2025');
    // console.log(Oranges.toString());
    // console.log(Oranges.getTotalValue());

    // ProductProperties.applyDiscount([Apples,Oranges],0.1);
    // console.log(Apples.toString());
    // console.log(Oranges.toString());

    let Soup = new ProductProperties('Soup',1.00,60);
    let Pop = new ProductProperties('Coke',1.79,200);
    let Candy = new ProductProperties('Reese\'s',1.50,200);

    let store = new StoreInventory([Soup,Pop,Candy]); //opening store
    store.addProduct(Apples); //stocking apples
    store.addProduct(Oranges); //stocking oranges
    console.log(store); //the store
    console.log("Before Discount: \n"+store.getInventoryValue().toFixed(2)); //total inventory value before sale
    ProductProperties.applyDiscount(store.inventory,0.15); //applying the sale
    console.log("After Discount: \n"+store.getInventoryValue().toFixed(2)); //total inventory value after the sale
    console.log(store.findProduct('Apple')); //searching the store for an apple
    
    