let favoritos = JSON.parse(localStorage.getItem("favoritos"));
let listaFavoritos = favoritos ? Object.keys(favoritos).map((e) => JSON.parse(favoritos[e])) : [];
if (paginaCargada == "favourites.html"){printCards(listaFavoritos, "favoritos");}

function favouriteCheck(item) {
    const favoritos = localStorage.getItem("favoritos")
    if (favoritos) {
        return Boolean(JSON.parse(favoritos)[item], JSON.parse(favoritos))
    }
}