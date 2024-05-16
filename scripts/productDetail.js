import { printDetails } from "./functions/printDetails.js";
import { changeMini } from "./functions/changeMini.js"
import { changeSubtotal } from "./functions/changeSubtotal.js"
import { fetchProduct } from "./products.js";
import { addToCart } from "./functions/addToCart.js";
import { triggerHeartListening } from "./functions/añadirFavoritos.js";

const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id") ?? "Galaxy S24 Plus";
fetchProduct()
	.then(products => products.find((elem) => elem.id == id))
	.then(producto => printDetails(producto))
	.then(() => {
		Object.values(document.getElementsByClassName("mini-img")).forEach(element => {
			element.addEventListener("click", changeMini)
		});

		Object.values(document.querySelectorAll("input[type=number]")).forEach(element => {
			element.addEventListener("click", changeSubtotal)
		});

		document.querySelector(".cart-btn").addEventListener("click", addToCart)

		triggerHeartListening()
	})


