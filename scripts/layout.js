const navSelector = document.getElementById("nav");
const footerNav = document.getElementById("footer")
const fetchOptions = async () => {
	return fetch("./jsons/options.json")
		.then(res => res.json())
		.then(json => json.options)
}

fetchOptions().then(options => {
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
})
fetchOptions().then(options => {
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
			link.href = element == "Lista de deseos" ? "./favourites.html" : "#";
			item.appendChild(link);
			ulist.appendChild(item);
		}
		footerNav.appendChild(ulist);
	}
})



