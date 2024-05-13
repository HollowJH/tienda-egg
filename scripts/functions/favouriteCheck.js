export function favouriteCheck(item) {
    const favoritos = localStorage.getItem("favoritos")
    if (favoritos) {
        return Boolean(JSON.parse(favoritos)[item], JSON.parse(favoritos))
    }
}