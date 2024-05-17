import { findNewTotal } from "./findNewTotal.js";
import { printTotal } from "./printTotal.js";

export function changeUnits(event) {
	let cart = JSON.parse(localStorage.getItem("cart"));
	const changedItem =
		event.target.parentElement.parentElement.getElementsByClassName(
			"product-title"
		)[0].textContent.trim();
	cart[changedItem] = [cart[changedItem][0], event.target.value];
	const newTotal = findNewTotal()
	
	localStorage.setItem("cart", JSON.stringify(cart));
	printTotal(newTotal);
}