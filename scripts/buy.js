import { printTotal } from "./functions/printTotal.js";
import { printCards } from "./functions/printCards.js"

let buyBtn = document.getElementsByClassName("cart-btn")[0];

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        buyBtn.addEventListener("click", () => {
            Swal.fire({
                title: "Deseas finalizar la compra?",
                showCloseButton: true,
                showConfirmButton: true,
                showDenyButton: true,
                confirmButtonText: "Si",
                denyButtonText: "No",
            }).then(res => {
                if (res.isConfirmed) {
                    delete localStorage["cart"]
                    printCards([], "cartproducts")
                    printTotal([])
                }
            })

        })
    }, 100);
})