import { favouriteCheck } from "./favouriteCheck.js";

export function toggleFavorite(title, favoritos, heart) {
    console.log(title);
	heart.classList.toggle("favourite");
	const producto = products.find((elem) => elem.id == title);
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