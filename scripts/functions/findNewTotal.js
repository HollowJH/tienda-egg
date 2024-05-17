export function findNewTotal() {
	let cart = JSON.parse(localStorage.getItem("cart"));
	let productsInCart = cart ? Object.keys(cart).map((e) => JSON.parse(cart[e][0])) : [];
	const findPrice = (elem) => elem.price * Number(cart[elem.id][1])
	return productsInCart.reduce((acc, curr) => acc + findPrice(curr), 0);
}