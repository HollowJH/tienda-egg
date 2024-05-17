import { triggerHeartListening } from "./functions/añadirFavoritos.js";
import { printCards } from "./functions/printCards.js";
import { printTotal } from "./functions/printTotal.js";
import { updateCart } from "./functions/updateCart.js";



let cart = JSON.parse(localStorage.getItem("cart"));
let productsInCart = cart ? Object.keys(cart).map((e) => JSON.parse(cart[e][0])) : [];
const findPrice = (elem) => elem.price * Number(cart[elem.id][1])
const total = productsInCart.reduce((acc, curr) => acc + findPrice(curr), 0);
printCards(productsInCart, "cartproducts");
printTotal(total);
triggerHeartListening()

const numbers = document.querySelectorAll("input[type='number']")
numbers.forEach((e) => e.addEventListener("change", (e) => { updateCart(e) }))
