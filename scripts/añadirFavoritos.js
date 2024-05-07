document.querySelector("svg").addEventListener("click", (e) => {
	const favoritos = JSON.parse(localStorage.getItem("favoritos"));
	const title = document.querySelector(".product-title");
	const heart = document.getElementById("heart");
	toggleFavorito(title, favoritos, heart);
});

// Añade/Remueve articulo de favoritos
function toggleFavorito(title, favoritos, heart) {
    console.log(heart);
	heart.classList.toggle("favourite");
	const nombreProducto = title.innerText.trim(); //Consigue el nombre del articulo
	const producto = products.find((elem) => elem.id == nombreProducto);
	const toggled = {};
	toggled[nombreProducto] = JSON.stringify(producto); //guarda el articulo en un objeto para despues añadirlo a LocalStorage
	let isFavourite = favouriteCheck(nombreProducto);

	if (!Boolean(favoritos) || !isFavourite) {
		//Si no hay favoritos o si el articulo no esta en favoritos lo añade
		localStorage.setItem(
			"favoritos",
			JSON.stringify({ ...favoritos, ...toggled })
		);
		heart.style.fill = "#ff3535";
		heart.classList.toggle("favourite");
	} else {
		delete favoritos[nombreProducto];
		localStorage.setItem("favoritos", JSON.stringify(favoritos));
		heart.style.fill = "none";
		heart.classList.toggle("favourite");
	}
	producto.toggleFavourite = !producto.isFavourite;
}
