import { favouriteCheck } from "./favouriteCheck.js"
let paginaCargada = location.pathname.split("/")
paginaCargada = paginaCargada[paginaCargada.length - 1]

export function createCard(product, cart) {
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
            <span class="product-title">${product.title} ${paginaCargada == "cart.html" ? `<svg ${favouriteCheck(product.id) ? 'class="favourite"' : ""} id="heart" xmlns="http://www.w3.org/2000/svg" fill="${favouriteCheck(product.id) ? "#ff3535" : "none"}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>` : ""}</span>
            <span class="product-description">${product.chosenColor ?? product.colors[0]}</span>
            ${paginaCargada == "cart.html" ? `<span class="product-description">${product.description}</span> 
            <input type="number" min="1" value="${cart[product.id][1]}" class="product-input">
          </div>
          <div class="product-price" id="price">$${product.price * cart[product.id][1]}</div>` : `<div class="product-price-block">
              <span class="product-price">${product.price}</span>
              <span class="product-discount">${product.onsale}</span>
            </div>
            <div class="product-tax-policy">
              Incluye impuesto País y percepción AFIP
            </div>
          </div>`}
          </div>`//operador ternario usado para mostrar diferentes elementos si la card se muestra en cart.html o en index.html/details.html
}