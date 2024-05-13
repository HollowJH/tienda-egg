import { favouriteCheck } from "./favouriteCheck.js";

export function printDetails(producto) {
    document.getElementById("details").innerHTML = ` <section class="product-images-block">
        <div class="product-images">
        ${producto.images.length == 1 ? "" : producto.images.map((e,i,arr) => i== arr.length - 1 ? "" : `<img
            class="mini-img"
            src=${e}
            alt="${producto.id}"
        />`).join("")}
        </div>
        <img
              class="big-img"
              id="big-img"
              src="${producto.images[producto.images.length - 1]}"
              alt="${producto.id}"
            />
    </section>
    <div class="product-description-block">
    <h1 class="product-title">${producto.title} ${`<svg id="heart" ${favouriteCheck(producto.id) ? 'class="favourite"' : ""} xmlns="http://www.w3.org/2000/svg" fill="${favouriteCheck(producto.id) ? "#ff3535" : "none"}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
  </svg>`}
  </span></h1>
    <form class="product-selector">
        <fieldset class="product-fieldset">
        <label class="product-label" for="color">Color</label>
        <select
            class="product-select"
            type="text"
            placeholder="Selecciona un color"
            id="color"
        >
            ${producto.colors.map(e => `<option value="${e}">${e}</option>`).join("")}
        </select>
        </fieldset>
    </form>
    <div class="product-description">
        <span class="product-label">Descripción</span>
        <p>
        ${producto.description}
        </p>
    </div>
    </div>
    <div class="product-checkout-block">
    <div class="checkout-container">
        <span class="checkout-total-label">Total:</span>
        <h2 id="price" class="checkout-total-price">$${producto.price}</h2>
        <p class="checkout-description">
        Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
        50711 haciendo la solicitud en AFIP.
        </p>
        <ul class="checkout-policy-list">
        <li>
            <span class="policy-icon"
            ><img src="./assets/truck.png" alt="Truck"
            /></span>
            <span class="policy-desc"
            >Agrega el producto al carrito para conocer los costos de
            envío</span
            >
        </li>
        <li>
            <span class="policy-icon"
            ><img src="./assets/plane.png" alt="Plane"
            /></span>
            <span class="policy-desc"
            >Recibí aproximadamente entre 10 y 15 días hábiles,
            seleccionando envío normal</span
            >
        </li>
        </ul>
        <div class="checkout-process">
        <div class="top">
            <input type="number" min="1" value="1" />
            <button type="button" class="cart-btn">
            Añadir al Carrito
            </button>
        </div>
        </div>
    </div>
    </div>`;
}