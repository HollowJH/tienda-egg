const navSelector = document.getElementById("nav");
const footerNav = document.getElementById("footer")
const options = [
	{
		title: "Ofertas",
		linkTo: "./outlet.html",
		opt: ["Laptops", "Audio", "Auticulares"],
	},
	{
		title: "Como comprar",
		linkTo: "./how.html",
		opt: ["Formas de pago", "Envios", "Devoluciones"],
	},
	{
		title: "Costos y tarifas",
		linkTo: "./taxs.html",
		opt: ["Impuestos", "Facturacion"],
	},
	{
		title: "Mis pedidos",
		linkTo: "./orders.html",
		opt: ["Pedir nuevamente", "Lista de deseos"],
	},
	{ title: "Garantia", linkTo: "./warranty.html", opt: [""] },
];

for (let option of options) {
    const listItem = document.createElement("li")
    listItem.className = "nav-li"
	const anchor = document.createElement("a");
	anchor.className = "nav-a";
	anchor.textContent = option.title;
	anchor.href = option.linkTo;
    listItem.appendChild(anchor)
	navSelector.appendChild(listItem);
}

for (let option of options) {
	const ulist = document.createElement("ul");
	ulist.className = "footer-ul";
	const main = document.createElement("li");
	main.className = "footer-main-item";
	const anchor = document.createElement("a");
	anchor.className = "footer-a";
	anchor.textContent = option.title;
	anchor.href = option.linkTo;
	main.appendChild(anchor);
	ulist.appendChild(main);
	for (let element of option.opt) {
		const item = document.createElement("li");
		item.className = "footer-li";
		const link = document.createElement("a");
		link.className = "footer-a";
		link.textContent = element;
		link.href = "#";
		item.appendChild(link);
		ulist.appendChild(item);
	}
	footerNav.appendChild(ulist);
}
