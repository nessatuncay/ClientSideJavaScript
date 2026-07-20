
document.getElementById("order-button").addEventListener("click", () =>
{
const name = document.getElementById("name").value;
const address = document.getElementById("address").value;
const phoneNumber = document.getElementById("phone").value;
const pizzaSize = document.getElementById("size").value;
const crustType = document.getElementById("crust").value;
const mainSauce = document.getElementById("sauce").value;
const pizzaAmount = document.getElementById("pizza-amount").value;
const spice = document.getElementById("spice").value;
const specialInstructions = document.getElementById("special-instructions").value;
const toppings = Array.from(document.querySelectorAll
                 ('input[id="topping"]:checked'))
                 .map((checkbox) => checkbox.value);

const pizza = new Pizza
(
    name, 
    address, 
    phoneNumber, 
    pizzaSize, 
    crustType,
    mainSauce, 
    toppings, 
    pizzaAmount, 
    spice, 
    specialInstructions
);

    document.getElementById("order-summary").textContent = pizza.getOrder();

});