import { printCards } from "./productCards.js";
import { products } from "./products.js";

function captureText(search) {
	let filter = products.filter(element => 
        element.title.toLowerCase().startsWith(search.toLowerCase())
    );
	printCards(filter, "products");
}

const searchSelector = document.querySelector("#search");
searchSelector.addEventListener("keyup", (event) =>
	captureText(searchSelector.value)
);
