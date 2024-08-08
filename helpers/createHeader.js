// **************************************************
// ** Header *******************************************

export const createHeader = () => {
	const d = document;
	const $header = d.querySelector("header");

	$header.innerHTML = `
		<div class="header flex-between padding-x">
				<a
					href="index.html"
					class="header-logo"
				>
					<img
						src="./img/logo.png"
						alt="logo"
					/>
				</a>
				<nav class="navbar flex-between">
					<a href="index.html">Home</a>
					<a href="about.html">About Us</a>
					<a href="menu.html">Menu</a>
					<a href="gallery.html">Gallery</a>
					<a href="contact.html">Contact</a>
				</nav>
				<div class="header-icons flex-between">
					<div class="cart-icon"><i class="fa-solid fa-cart-shopping"></i></div>
					<div class="login-icon"><i class="fa-solid fa-user"></i></div>
					<div class="menu-icon"><i class="fa-solid fa-bars"></i></div>
				</div>
				<aside class="cart-container flex-col aside-container">
					<h3 class="cart-title">Shopping Cart</h3>
					<div class="cart-item flex-between">
						<img
							src="./img/pizza.png"
							alt="Item image"
						/>
						<div class="cart-item-content">
							<h3>Pizza</h3>
							<span class="quantity">1</span>
							<span class="multiply">x</span>
							<span class="price">$20</span>
						</div>
						<i class="fa-solid fa-xmark"></i>
					</div>
					<div class="cart-item flex-between">
						<img
							src="./img/pizza.png"
							alt="Item image"
						/>
						<div class="cart-item-content">
							<h3>Pizza</h3>
							<span class="quantity">1</span>
							<span class="multiply">x</span>
							<span class="price">$20</span>
						</div>
						<i class="fa-solid fa-xmark"></i>
					</div>
					<h3 class="total">Total: $40</h3>
					<a
						href="#"
						class="main-btn"
						>Checkout cart</a
					>
				</aside>
				<form
					action=""
					class="login-form flex-col aside-container"
				>
					<h3>Login form</h3>
					<input
						type="email"
						class="form-input"
						placeholder="Enter your email..."
						class="form-input"
					/>
					<input
						type="password"
						class="form-input"
						placeholder="Enter your password..."
						class="form-input"
					/>
					<div class="remember">
						<input
							type="checkbox"
							name=""
							id="remember-me"
						/>
						<label for="remember-me">Remember me</label>
					</div>
					<input
						type="submit"
						value="Login"
						class="main-btn"
					/>
				</form>
				<nav class="mobile-nav flex-col aside-container">
					<a href="index.html">Home</a>
					<a href="about.html">About Us</a>
					<a href="menu.html">Menu</a>
					<a href="gallery.html">Gallery</a>
					<a href="contact.html">Contact</a>
				</nav>
			</div>`;

	const $cartIcon = d.querySelector(".cart-icon i"),
		$cartContainer = d.querySelector(".cart-container");

	const $loginIcon = d.querySelector(".login-icon i"),
		$loginForm = d.querySelector(".login-form");

	const $menuIcon = d.querySelector(".menu-icon"),
		$mobileNav = d.querySelector(".mobile-nav");

	// Shopping Cart *******

	$cartIcon.addEventListener("click", () => {
		$cartContainer.classList.toggle("active");
		$loginForm.classList.remove("active");
		$mobileNav.classList.remove("active");
	});

	// Login Form ******

	$loginIcon.addEventListener("click", () => {
		$loginForm.classList.toggle("active");
		$cartContainer.classList.remove("active");
		$mobileNav.classList.remove("active");
	});

	// Mobile Menu *******

	$menuIcon.addEventListener("click", () => {
		$mobileNav.classList.toggle("active");
		$loginForm.classList.remove("active");
		$cartContainer.classList.remove("active");
	});
};
