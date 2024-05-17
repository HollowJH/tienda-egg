import { fetchProduct } from "../products.js";

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
    const currentCart = JSON.parse(localStorage.getItem("cart")) ?? {}
    const products = await fetchProduct()
    const producto = await products.find((elem) => elem.id == id)

    if (safeIsInCart(currentCart, id) != document.querySelector("input[type='number']").value) {
        producto.chosenColor = document.getElementById("color").value
        const added = { [producto.title]: [JSON.stringify(producto), document.querySelector("input[type='number']").value] }
        localStorage.setItem("cart", JSON.stringify({ ...currentCart, ...added }));
        
        Toast.fire({
            icon: "success",
            title: "Articulo añadido al carrito",
            position: "bottom-end"
        })
    } else {
        Toast.fire({
            icon: "warning",
            title: "El articulo ya esta en el carrito",
            position: "bottom-end"
        })
    }

}