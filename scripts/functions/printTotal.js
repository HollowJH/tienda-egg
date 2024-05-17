export function printTotal(total) {
	  
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