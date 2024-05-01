function createCard(product) {
	return `
       <div class="product-card">
          <a href="./details.html?id=${product.id}">
          <img
            class="product-img"
            src="${product.images[0]}"
            alt="${product.id}"
          />
          </a>
          <div class="product-info">
            <span class="product-title">${product.title}</span>
            <span class="product-description">${product.colors[0]}</span>
            ${location.pathname == "/cart.html" ? `<span class="product-description">${product.description}</span> 
            <input type="number" min="1" value="${JSON.parse(localStorage.getItem("cart"))[product.id][1]}" onchange="changeSubtotal(event)" class="product-input">
          </div>
          <div class="product-price" id="price">$${product.price * JSON.parse(localStorage.getItem("cart"))[product.id][1]}</div>` : `<div class="product-price-block">
              <span class="product-price">${product.price}</span>
              <span class="product-discount">${product.onsale}</span>
            </div>
            <div class="product-tax-policy">
              Incluye impuesto País y percepción AFIP
            </div>
          </div>`}
          </div>`//operador ternario usado para mostrar diferentes elementos si la card se muestra en cart.html o en index.html/details.html
}
function printCards(arrayOfProducts, idSelector) {
	let productsTemplate = "";
	for (const element of arrayOfProducts) {
		productsTemplate += createCard(element);
	}
	const productsSelector = document.getElementById(idSelector);
	productsSelector.innerHTML = productsTemplate;
}

// Verifica la pagina cargada
if (location.pathname == "/details.html") { //si la pagina es una pagina de producto solo muestra los primeros 3 (excluyendo el principal mostrado)
	printCards(
		products
			.filter(
				(e) => e.id != new URLSearchParams(location.search).get("id")
			)
			.slice(0, 3),
		"product-container"
	);
} else if (["/index.html", "/"].includes(location.pathname)) { // si es la pagina principal muestra todos los productos
	printCards(products, "products");
}
