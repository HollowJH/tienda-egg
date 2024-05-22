import { printCards } from "./functions/printCards.js";
import { logged, users } from "./toggleLogin.js";

let paginaCargada = location.pathname.split("/")
paginaCargada = paginaCargada[paginaCargada.length - 1]
let favoritos = JSON.parse(localStorage.getItem("favoritos"));
let listaFavoritos = users?.[logged].favourites ?? {};
if (paginaCargada == "favourites.html" && logged){
	printCards(Object.values(listaFavoritos), "favoritos");
}