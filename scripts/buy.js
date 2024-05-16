import { printTotal } from "./functions/printTotal.js";
import {printCards} from "./functions/printCards.js"

let buyBtn = document.getElementsByClassName("cart-btn")[0];

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        buyBtn.addEventListener("click", () => {
        delete localStorage["cart"]
        printCards([], "cartproducts")
        printTotal([])
    })
    }, 100);
})