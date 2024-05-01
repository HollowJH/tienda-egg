function changeUnits(event) {
	const cart = JSON.parse(localStorage.getItem("cart"));
	const changedItem =
		event.target.parentElement.parentElement.getElementsByClassName(
			"product-title"
		)[0].textContent;
	cart[changedItem] = [cart[changedItem][0], event.target.value];
	localStorage.setItem("cart", JSON.stringify(cart));
	printTotal(productsInCart);
}

function updateCart(event) {
    let item = JSON.parse(cart[event.target.parentElement.getElementsByClassName("product-title")[0].textContent][0])
    let priceSection = event.target.parentElement.parentElement.getElementsByClassName("product-price")[0]
    priceSection.textContent = "$" + item.price * event.target.value
    changeUnits(event)
}

function printTotal(productsInCart) {
	let total = 0;
	productsInCart.forEach((element) => {
		total +=
			element.price *
			Number(JSON.parse(localStorage.getItem("cart"))[element.id][1]);
	});
	document.getElementById("total").innerHTML = `
  <div class="cart-data">
    <h4 class="cart-title"><span>Resumen</span> <span>del</span> <span>pedido</span></h4>
    <div class="cart-total">
      <p>Total</p>
      <p>$${total}</p>
    </div>
    <div class="cart-tax">
      Incluye impuesto País y percepción AFIP
    </div>
  </div>
  <button class="cart-btn">COMPRAR</button>`;
}

let cart = JSON.parse(localStorage.getItem("cart"));
var productsInCart = Object.keys(cart).map((e) => JSON.parse(cart[e][0]));
printCards(productsInCart, "cartproducts");
printTotal(productsInCart);
