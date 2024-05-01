const addToCart = document.querySelector(".cart-btn") //select add to cart button


addToCart.addEventListener("click", () => {
    const added = {} 
    added[producto.title] = [JSON.stringify(producto), document.querySelector("input[type='number']").value] 
    const currentCart = JSON.parse(localStorage.getItem("cart")) ?? {}
    localStorage.setItem("cart", JSON.stringify({...currentCart, ...added}));
})