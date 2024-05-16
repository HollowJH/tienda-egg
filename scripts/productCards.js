import {printCards} from "./functions/printCards.js"
import { fetchProduct } from "./products.js";


// Verifica la pagina cargada
let paginaCargada = location.pathname.split("/")
paginaCargada = paginaCargada[paginaCargada.length - 1]
if (paginaCargada == "details.html") { //si la pagina es una pagina de producto solo muestra los primeros 3 (excluyendo el principal mostrado)
	fetchProduct()
	.then(products => products.filter((e) => e.id != new URLSearchParams(location.search).get("id")).slice(0, 3))
	.then(firstThree => printCards(firstThree, "product-container"))
} else if (["index.html", ""].includes(paginaCargada)) { // si es la pagina principal muestra todos los productos
	fetchProduct()
	.then(products => printCards(products, "products"))
}
