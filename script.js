class ProductProperties{
    constructor(name,price,quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    }
    getTotalValue(){
        return (this.price*this.quantity);
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
            return (`Product: ${this.name}, Price: ${this.price}, Qunatity: ${this.quantity}, Expiration Date: ${this.expiryDate}.`);
        }
    }

