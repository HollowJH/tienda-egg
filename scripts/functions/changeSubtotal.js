import { fetchProduct } from "../products.js";

export async function changeSubtotal(event) {
    fetchProduct()
	.then(products => products.find((elem) => elem.id == id))
    .then(producto => document.getElementById("price").textContent = "$" + producto.price * event.target.value)
    
}

const id = new URLSearchParams(location.search).get("id") ?? "Galaxy S24 Plus";
