import { fetchProduct } from "../products.js";
import { printCards } from "./printCards.js";

export function captureText(search) {
	fetchProduct()
		.then(products => {
			const filter = products.filter(element =>
				element.title.toLowerCase().startsWith(search.toLowerCase())
			);
			printCards(filter, "products");
		})

}