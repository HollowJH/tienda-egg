import { fetchProduct } from "../products.js";

export async function toggleFavorite(title, favoritos, heart) {
	heart.classList.toggle("favourite");
	const products = await fetchProduct()
	const producto = await products.find((elem) => elem.id == title);
	console.log(favoritos);
	if (!favoritos?.[title]) {
		console.log("added");
		favoritos[title] = producto;
		heart.style.fill = "#ff3535";
		return favoritos
	} else {
		console.log("deleted");
		delete favoritos[title];
		heart.style.fill = "none";
		return favoritos
	}
	producto.toggleFavourite = !producto.isFavourite;
}