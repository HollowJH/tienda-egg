import { logged, users } from "../toggleLogin.js";
import { Toast } from "./addToCart.js";
import { toggleFavorite } from "./toggleFavourite.js";

export const triggerHeartListening = () => {
	document.querySelectorAll("#heart").forEach((e) => {
		const inCart = document.querySelectorAll(".product-title");
		e.addEventListener("click", (e) => {
			if (!logged) {
				Toast.fire({
					icon: "error",
					title: "Inicia sesion para añadir a favoritos",
					position: "bottom-end"
				})
				return
			}
			const target = e.target.parentElement;
			const classes = Object.values(target.classList);
			const title = (
				classes.includes("product-title") ? target : target.parentElement
			).textContent.trim(); // gets selected product's title
			const favoritos = users[logged].favourites;
			const heart = Object.values(inCart).find(
				(e) => e.textContent.trim() == title
			)?.childNodes[1];
			toggleFavorite(title, favoritos, heart)
				.then(x => {
					localStorage.setItem("users", JSON.stringify(users))
				})
		});
	});
}
