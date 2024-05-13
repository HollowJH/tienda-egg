import { printCards } from "./functions/printCards.js";

let paginaCargada = location.pathname.split("/")
paginaCargada = paginaCargada[paginaCargada.length - 1]
let favoritos = JSON.parse(localStorage.getItem("favoritos"));
let listaFavoritos = favoritos ? Object.keys(favoritos).map((e) => JSON.parse(favoritos[e])) : [];
if (paginaCargada == "favourites.html"){printCards(listaFavoritos, "favoritos");}