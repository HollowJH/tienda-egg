import { toggleFavorite } from "./functions/toggleFavourite.js";
const inCart = document.querySelectorAll(".product-title");

document.querySelectorAll("svg").forEach((e) => {
	e.addEventListener("click", (e) => {
		const target = e.target.parentElement;
		const classes = Object.values(target.classList);
		const title = (
			classes.includes("product-title") ? target : target.parentElement
		).textContent.trim(); // gets selected product's title
		const favoritos = JSON.parse(localStorage.getItem("favoritos"));
		console.log(target);
		const heart = Object.values(inCart).find(
			(e) => e.textContent.trim() == title
		).childNodes[1];
		toggleFavorite(title, favoritos, heart);
	});
});
