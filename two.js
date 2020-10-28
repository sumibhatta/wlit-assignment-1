// Function that takes shopping cart object as an input and returns total price of all the products
let Cart = {
    apple: 25,
    banana: 32.2
};

function totalPrice(CartBox) {
    let total = 0;
    for (let cartItem in CartBox) {
        total += CartBox[cartItem];
    }
    return `Total Price is: ${total}`;
}
alert(totalPrice(Cart));