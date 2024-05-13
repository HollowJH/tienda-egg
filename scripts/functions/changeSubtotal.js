export function changeSubtotal(event) {
    document.getElementById("price").textContent = "$" + producto.price * event.target.value
}

const id = new URLSearchParams(location.search).get("id") ?? "Galaxy S24 Plus";
const producto = products.find((elem) => elem.id == id);