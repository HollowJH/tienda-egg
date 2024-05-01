function changeMini(event) {
    const clicked = event.target.src;
    const main = document.querySelector(".big-img")

    event.target.src = main.src
    main.src = clicked
}

function changeSubtotal(event) {
    let priceSection = location.pathname == "/cart.html" ? event.target.parentElement.parentElement.getElementsByClassName("product-price")[0] : document.getElementById("price")
    priceSection.textContent = "$" + producto.price * event.target.value
    if(location.pathname == "/cart.html"){
        changeUnits(event)}
}

const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id") ?? "Galaxy S24 Plus";
const producto = products.find((elem) => elem.id == id)
if(location.pathname == "/details.html"){printDetails(producto);}

function printDetails(producto) {
    document.getElementById("details").innerHTML = ` <section class="product-images-block">
        <div class="product-images">
        ${producto.images.length == 1 ? "" : producto.images.map((e,i,arr) => i== arr.length - 1 ? "" : `<img
            class="mini-img"
            src=${e}
            alt="${producto.id}"
            onclick="changeMini(event)"
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
    <h1 class="product-title">${producto.title}</h1>
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
            <input type="number" min="1" value="1" onchange="changeSubtotal(event)" />
            <button type="button" class="cart-btn">
            Añadir al Carrito
            </button>
        </div>
        </div>
    </div>
    </div>`;
}