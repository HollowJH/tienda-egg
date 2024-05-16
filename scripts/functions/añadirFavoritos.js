import { toggleFavorite } from "./toggleFavourite.js";

export const triggerHeartListening = () => {
	document.querySelectorAll("svg").forEach((e) => {
		const inCart = document.querySelectorAll(".product-title");
		e.addEventListener("click", (e) => {
			const target = e.target.parentElement;
			const classes = Object.values(target.classList);
			const title = (
				classes.includes("product-title") ? target : target.parentElement
			).textContent.trim(); // gets selected product's title
			const favoritos = JSON.parse(localStorage.getItem("favoritos"));
			const heart = Object.values(inCart).find(
				(e) => e.textContent.trim() == title
			)?.childNodes[1];
			toggleFavorite(title, favoritos, heart);
		});
	});
}
