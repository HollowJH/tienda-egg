import { printTotal } from "./printTotal.js";

export function changeUnits(event) {
	let cart = JSON.parse(localStorage.getItem("cart"));
	let productsInCart = cart ? Object.keys(cart).map((e) => JSON.parse(cart[e][0])) : [];
	const changedItem =
		event.target.parentElement.parentElement.getElementsByClassName(
			"product-title"
		)[0].textContent.trim();
	cart[changedItem] = [cart[changedItem][0], event.target.value];
	localStorage.setItem("cart", JSON.stringify(cart));
	printTotal(productsInCart);
}