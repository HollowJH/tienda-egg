import { fetchProduct } from "../products.js";
import { favouriteCheck } from "./favouriteCheck.js";

export async function toggleFavorite(title, favoritos, heart) {
	heart.classList.toggle("favourite");
	const products = await fetchProduct()
	const producto = await products.find((elem) => elem.id == title);
	const toggled = {};
	toggled[title] = JSON.stringify(producto); //guarda el articulo en un objeto para despues añadirlo a LocalStorage
	let isFavourite = favouriteCheck(title);

	if (!Boolean(favoritos) || !isFavourite) {
		//Si no hay favoritos o si el articulo no esta en favoritos lo añade
		localStorage.setItem(
			"favoritos",
			JSON.stringify({ ...favoritos, ...toggled })
		);
		heart.style.fill = "#ff3535";
	} else {
		delete favoritos[title];
		localStorage.setItem("favoritos", JSON.stringify(favoritos));
		heart.style.fill = "none";
	}
	producto.toggleFavourite = !producto.isFavourite;
}