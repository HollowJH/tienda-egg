const loginButton = document.getElementById("loginForm");
const previousPage = sessionStorage.getItem("lastPage")
const users = JSON.parse(localStorage.getItem("users"))

loginButton.addEventListener("submit", (e) => {
	e.preventDefault()
	const form = new FormData(e.target)
	const [email, pass] = [form.get("email"), form.get("password")]
	if (users?.[email]){
		const userData = users[email]
		console.log("X");
		if(userData.password === pass){
			userData.islogged = true
			users[email] = userData
			localStorage.setItem("users", JSON.stringify(users))
			localStorage.setItem("logged", email)

			if (previousPage) {
				location.href = `${previousPage}${sessionStorage.getItem("search")}`
				return
			}
			location.pathname = previousPage ?? "/index.html"
		}
	}
})