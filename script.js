const { indexOf } = require("lodash");

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
            this.inventory.push(product);
        }
        getInventoryValue(){
            var total;
            this.inventory.forEach(element =>{
                total = total + element.price;
            })
            return total;
        }
        findProduct(name){
           // this.inventory.find(name);
           var i;
           this.inventory.forEach(el =>{
            
            if(el.name === name){
                i = indexOf(el);
            }if(i==undefined){
                i=null;
            }

           });
           if (i!=null){
            return this.inventory[i];
           }else return i;
        }
    }

    let Apples = new Perishables('Apple',0.89,300,'Tuesday August 18th 2025');
    console.log(Apples.toString());
    console.log(Apples.getTotalValue());

    let Oranges = new Perishables('Orange', 0.79,300,'Tuesday August 18th 2025');
    console.log(Oranges.toString());
    console.log(Oranges.getTotalValue());

    ProductProperties.applyDiscount([Apples,Oranges],0.1);
    console.log(Apples.toString());
    console.log(Oranges.toString());

    let Soup = new ProductProperties('Soup',1.00,60);
    let Pop = new ProductProperties('Coke',1.79,200);
    let Candy = new ProductProperties('Reese\'s',1.50,200);