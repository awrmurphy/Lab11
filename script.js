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
        return (`Product: ${this.name}, Price: ${this.price}, Qunatity: ${this.quantity}.`);
    
    }
}
    class Perishables extends ProductProperties{
        constructor(name,price,quantity,expiryDate){
        super(name,price,quantity);
        this.expiryDate = expiryDate;
        }
        toString(){
            return (`Product: ${this.name}, Price: \$${this.price}, Qunatity: ${this.quantity}, Expiration Date: ${this.expiryDate}.`);
        }
    }

    let Apples = new Perishables('Apple',0.89,300,'Tuesday August 18th 2025');
    Apples.toString();

    let Oranges = new Perishables('Orange')
