import { fetchProduct } from "../products.js";

export async function addToCart() {
    const products = await fetchProduct()
    const id = new URLSearchParams(location.search).get("id") ?? "Galaxy S24 Plus";
    const producto = await products.find((elem) => elem.id == id)
    const added = {}
    let productToAdd = producto
    productToAdd.chosenColor = document.getElementById("color").value
    added[producto.title] = [JSON.stringify(producto), document.querySelector("input[type='number']").value] 
    const currentCart = JSON.parse(localStorage.getItem("cart")) ?? {}
    localStorage.setItem("cart", JSON.stringify({...currentCart, ...added}));
}