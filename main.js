const d = document,
	$cartIcon = d.querySelector(".cart-icon i"),
	$cartContainer = d.querySelector(".cart-container");

const $loginIcon = d.querySelector(".login-icon i"),
	$loginForm = d.querySelector(".login-form");

// Shopping Cart ******************************

$cartIcon.addEventListener("click", () => {
	$cartContainer.classList.toggle("active");
	$loginForm.classList.remove("active");
});

// Login Form ******************************

$loginIcon.addEventListener("click", () => {
	$loginForm.classList.toggle("active");
	$cartContainer.classList.remove("active");
});
