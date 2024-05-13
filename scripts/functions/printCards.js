import {createCard} from "./createCard.js"

export function printCards(arrayOfProducts, idSelector) {
	let productsTemplate = "";
	for (const element of arrayOfProducts) {
		productsTemplate += createCard(element);
	}
	const productsSelector = document.getElementById(idSelector);
	productsSelector.innerHTML = productsTemplate;
}