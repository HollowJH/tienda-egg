import { triggerHeartListening } from "./functions/añadirFavoritos.js";
import { printCards } from "./functions/printCards.js";
import { printTotal } from "./functions/printTotal.js";
import { updateCart } from "./functions/updateCart.js";
import { logged, users } from "./toggleLogin.js";


if (logged) {
	let cart = users[logged].cart
	console.log(cart);
	let productsInCart = cart ? Object.keys(cart).map((e) => cart[e][0]) : [];
	const findPrice = (elem) => elem.price * Number(cart[elem.id][1])
	const total = productsInCart.reduce((acc, curr) => acc + findPrice(curr), 0);
	printCards(productsInCart, "cartproducts", cart);
	printTotal(total);
	triggerHeartListening()

	const numbers = document.querySelectorAll("input[type='number']")
	numbers.forEach((e) => e.addEventListener("change", (e) => { updateCart(e) }))
} else{
	printTotal()
}

