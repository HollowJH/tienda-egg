export function captureText(search) {
	let filter = products.filter(element => 
        element.title.toLowerCase().startsWith(search.toLowerCase())
    );
	printCards(filter, "products");
}