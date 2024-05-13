import { printDetails } from "./functions/printDetails.js";
import {changeMini} from "./functions/changeMini.js"
import {changeSubtotal} from "./functions/changeSubtotal.js"

const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id") ?? "Galaxy S24 Plus";
const producto = products.find((elem) => elem.id == id)
printDetails(producto);

Object.values(document.getElementsByClassName("mini-img")).forEach(element => {
	element.addEventListener("click", changeMini)
});

Object.values(document.querySelectorAll("input[type=number]")).forEach(element => {
	element.addEventListener("click", changeSubtotal)
});
