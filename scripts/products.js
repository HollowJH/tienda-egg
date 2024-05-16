function fetchProduct() {
	return fetch("./jsons/products.json")
		.then(res => res.json())
		.then(json => json.products)
		.then(x => {return x})
}

export { fetchProduct }