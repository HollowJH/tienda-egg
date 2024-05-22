import { logged, users } from "../toggleLogin.js";
export function favouriteCheck(item) {
    const favoritos = users?.[logged].favourites
    if (favoritos) {
        return Object.keys(favoritos).includes(item)
    }
}