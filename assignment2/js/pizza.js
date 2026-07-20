

class Pizza
{
    name;
    address;
    phoneNumber;
    pizzaSize;
    crustType;
    mainSauce;
    toppings;
    pizzaAmount;
    spice;
    specialInstructions;

    constructor (name, address, phoneNumber, pizzaSize, crustType, mainSauce, toppings, pizzaAmount, spice, specialInstructions)
    {
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.pizzaSize = pizzaSize;
        this.crustType = crustType;
        this.mainSauce = mainSauce;
        this.toppings = toppings;
        this.pizzaAmount = pizzaAmount;
        this.spice = spice;
        this.specialInstructions = specialInstructions;
    }


    getOrder()
    {
        const toppingAmount = this.toppings.length > 0
            ? this.toppings.join(", ")
            : "No Toppings Selected";

        let order = `Order Details:\n Customer Name: ${this.name}\n Customer Address: ${this.address}\n Phone Number: ${this.phoneNumber}\n Pizza Size: ${this.pizzaSize}\n Crust Type: ${this.crustType}\n Main Sauce: ${this.mainSauce}\n Toppings: ${toppingAmount}\n Pizza Amount: ${this.pizzaAmount}\n Spice Level: ${this.spice}\n Special Instructions: ${this.specialInstructions}`;

        return order;
    }

}