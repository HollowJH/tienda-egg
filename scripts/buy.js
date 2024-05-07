let buyBtn = document.getElementsByClassName("cart-btn")[0];

document.addEventListener("DOMContentLoaded", () => {
    buyBtn.addEventListener("click", () => {
        delete localStorage["cart"]
        productsInCart = []
        printCards([], "cartproducts")
        printTotal(false)
    })
})