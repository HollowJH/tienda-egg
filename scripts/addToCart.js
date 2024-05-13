const addToCart = document.querySelector(".cart-btn") //select add to cart button
const id = new URLSearchParams(location.search).get("id") ?? "Galaxy S24 Plus";
const producto = products.find((elem) => elem.id == id);

addToCart.addEventListener("click", () => {
    const added = {}
    let productToAdd = producto
    productToAdd.chosenColor = document.getElementById("color").value
    added[producto.title] = [JSON.stringify(producto), document.querySelector("input[type='number']").value] 
    const currentCart = JSON.parse(localStorage.getItem("cart")) ?? {}
    localStorage.setItem("cart", JSON.stringify({...currentCart, ...added}));
    console.log(JSON.parse(localStorage.getItem("cart")))
})