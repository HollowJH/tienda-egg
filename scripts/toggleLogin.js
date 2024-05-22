const loginIcon = document.getElementById("login");
const logoutIcon = document.getElementById("logout");
const cartIcon = document.getElementById("cart");
export const users = JSON.parse(localStorage.getItem("users"))
export const logged = localStorage.getItem("logged")
sessionStorage.setItem("lastPage", location.pathname)
sessionStorage.setItem("search", location.search)


const login = () => {
	loginIcon.addEventListener("click", () => {
		location.href = "/login.html"
	})
}

const logout = () => {
	logoutIcon.addEventListener("click", () => {
		[cartIcon, loginIcon, logoutIcon].forEach((element, index) => {
			if (location.pathname === "/cart.html" && index === 0) { return }
			element.classList.toggle("hide")
		}
		);
		users[logged].islogged = false
		localStorage.setItem("users", JSON.stringify(users))
		localStorage.setItem("logged", "")
	})
	login()
}


if (logged) {
	[cartIcon, loginIcon, logoutIcon].forEach((element, index) => {
		if (location.pathname === "/cart.html" && index === 0) { return }
		element.classList.toggle("hide")
	}
	);
	logout()
} else {
	login()
}

