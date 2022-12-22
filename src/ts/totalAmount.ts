
import { userCart } from "./checkout_page";

// summerar priset på varor i varukorgen
function sumTotalPrice () {
    let sum :number = 0;
    let pTag = document.getElementById("sumOfShoppingCart") as HTMLParagraphElement;

    for(let i = 0; i < userCart.length; i++) {

        let amount :number= 1;
        if (amount > 1) {
            sum = sum + (userCart[i].price * userCart[i].quantity);
        }
        else {
            sum = sum + userCart[i].price;
        }
    }

    // skriver ut total priset i DOM
    let totalPrice :string = sum.toString(); 
    pTag.innerText = totalPrice + " :-";

}