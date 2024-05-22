const users = JSON.parse(localStorage.getItem("users"))
const register = document.getElementById("registerForm")

register.addEventListener("submit", (e) => {
	e.preventDefault()
	const form = new FormData(e.target)
	const [email, pass] = [form.get("email"), form.get("password")]

	const newUser = {}
	newUser = { [email]: {password: pass, islogged: false, cart: {}, favourites: {}}}
	localStorage.setItem("users", JSON.stringify({...users, ...newUser}))
	location.href = "/login.html"
})