let buyBtn = document.getElementsByClassName("cart-btn")[0];

document.addEventListener("DOMContentLoaded", () => {
    buyBtn.addEventListener("click", () => {
        localStorage.clear()
        productsInCart = []
        printCards([], "cartproducts")
        printTotal(false)
    })
})