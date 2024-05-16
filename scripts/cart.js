import { triggerHeartListening } from "./functions/añadirFavoritos.js";
import { printCards } from "./functions/printCards.js";
import { printTotal } from "./functions/printTotal.js";
import { updateCart } from "./functions/updateCart.js";



let cart = JSON.parse(localStorage.getItem("cart"));
let productsInCart = cart ? Object.keys(cart).map((e) => JSON.parse(cart[e][0])) : [];
printCards(productsInCart, "cartproducts");
printTotal(productsInCart);
triggerHeartListening()

const numbers = document.querySelectorAll("input[type='number']")
numbers.forEach((e) => e.addEventListener("change", (e) => {updateCart(e)}))
