import { changeUnits } from "./changeUnits.js"

export function updateCart(event) {
	let cart = JSON.parse(localStorage.getItem("cart"));
	let item = JSON.parse(cart[event.target.parentElement.getElementsByClassName("product-title")[0].textContent.trim()][0])
	let priceSection = event.target.parentElement.parentElement.getElementsByClassName("product-price")[0]
	priceSection.textContent = "$" + item.price * event.target.value
	changeUnits(event)
}