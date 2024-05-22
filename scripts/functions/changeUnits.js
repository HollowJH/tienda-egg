import { logged, users } from "../toggleLogin.js";
import { printTotal } from "./printTotal.js";

export function changeUnits(event, cart) {
	const changedItem =
		event.target.parentElement.parentElement.getElementsByClassName(
			"product-title"
		)[0].textContent.trim();
	cart[changedItem] = [cart[changedItem][0], event.target.value];
	const findPrice = (elem) => elem.price * Number(cart[elem.id][1])
	let productsInCart = cart ? Object.keys(cart).map((e) => cart[e][0]) : [];
	const newTotal = productsInCart.reduce((acc, curr) => acc + findPrice(curr), 0)
	
	printTotal(newTotal);
	users[logged].cart = cart
	localStorage.setItem("users", JSON.stringify(users))
}