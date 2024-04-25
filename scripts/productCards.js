function createCard(product) {
	return `
       <a class="product-card" href="./details.html?id=${product.id}">
          <img
            class="product-img"
            src="${product.images[0]}"
            alt="${product.id}"
          />
          <div class="product-info">
            <span class="product-title">${product.title}</span>
            <span class="product-description">Silver</span>
            <div class="product-price-block">
              <span class="product-price">${product.price}</span>
              <span class="product-discount">${product.onsale}</span>
            </div>
            <div class="product-tax-policy">
              Incluye impuesto País y percepción AFIP
            </div>
          </div>
        </a>
    `;
}
function printCards(arrayOfProducts, idSelector) {
	let productsTemplate = "";
	for (const element of arrayOfProducts) {
		productsTemplate += createCard(element);
	}
	const productsSelector = document.getElementById(idSelector);
	productsSelector.innerHTML = productsTemplate;
}

// Verifica la pagina cargada, si es index muestra todos los productos, si es details muestra los 3 primeros excluyendo el que se esta viendo en ofertas de la semana
if (location.pathname == "/details.html") {
	printCards(
		products
			.filter(
				(e) => e.id != new URLSearchParams(location.search).get("id")
			)
			.slice(0, 3),
		"product-container"
	);
} else if (["/index.html", "/"].includes(location.pathname)) {
	printCards(products, "products");
}
