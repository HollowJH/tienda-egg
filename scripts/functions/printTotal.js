export function printTotal(productsInCart) {
	const findPrice = (elem) => elem.price * Number(JSON.parse(localStorage.getItem("cart"))[elem.id][1])
	const total  = productsInCart.reduce((acc, curr) => acc + findPrice(curr), 0);
	  
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