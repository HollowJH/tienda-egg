import {createCard} from "./createCard.js"

export function printCards(arrayOfProducts, idSelector) {
	arrayOfProducts.sort((current, next) => current.id.toUpperCase() < next.id.toUpperCase() ? -1 : 1)
	let productsTemplate = "";
	for (const element of arrayOfProducts) {
		productsTemplate += createCard(element);
	}
	const productsSelector = document.getElementById(idSelector);
	productsSelector.innerHTML = productsTemplate;
}