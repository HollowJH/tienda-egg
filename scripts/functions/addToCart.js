import { fetchProduct } from "../products.js";
import { logged, users } from "../toggleLogin.js";

export const Toast = Swal.mixin({
    toast: true,
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
});

const safeIsInCart = (currentCart, id) => {
    try {
        return JSON.parse(currentCart?.[id][1])

    } catch (error) {
        return -1
    }
}

export async function addToCart() {
    const id = new URLSearchParams(location.search).get("id") ?? "Galaxy S24 Plus";
    const currentCart = users?.[logged].cart
    const products = await fetchProduct()
    const producto = await products.find((elem) => elem.id == id)
    const ammount = document.querySelector("input[type='number']").value

    if (!logged) {
        Toast.fire({
            icon: "error",
            title: "Inicia sesion para añadir al carrito",
            position: "bottom-end"
        })
        return
    }
    if (currentCart?.[id]?.[1] !== ammount) {
        Toast.fire({
            icon: "success",
            title: !currentCart?.[id]?.[1] ? "Articulo añadido al carrito" : "Carrito actualizado",
            position: "bottom-end"
        })
        producto.chosenColor = document.getElementById("color").value
        const added = { [producto.title]: [producto, document.querySelector("input[type='number']").value] }
        users[logged].cart = { ...currentCart, ...added }
        localStorage.setItem("users", JSON.stringify(users))
    } else {
        Toast.fire({
            icon: "warning",
            title: "El articulo ya esta en el carrito",
            position: "bottom-end"
        })
    }

}