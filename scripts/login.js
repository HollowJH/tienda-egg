const loginIcon = document.getElementById("login");
const logoutIcon = document.getElementById("logout");
const cartIcon = document.getElementById("cart");

const isOnline = () => localStorage.getItem("isOnline") == "true";

if (isOnline()) {
	[cartIcon, loginIcon, logoutIcon].forEach((element) =>
		element.classList.toggle("hide")
	);
}

[loginIcon, logoutIcon].forEach((element) => {
	element.addEventListener("click", () => {
		[cartIcon, loginIcon, logoutIcon].forEach((element) =>
			element.classList.toggle("hide")
		);
		localStorage.setItem("isOnline", !isOnline());
	});
});
