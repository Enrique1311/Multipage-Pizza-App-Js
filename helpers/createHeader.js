// **************************************************
// ** Header *******************************************

import { updateCartData } from "./updateCartData.js";
import { createCartContent } from "./cartService.js";

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
						src="../assets/imgs/logo.png"
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
					<div class="cart-icon"><i class="fa-solid fa-cart-shopping"></i><p class="cart-amount flex-center"></p></div>
					<div class="login-icon"><i class="fa-solid fa-user"></i></div>
					<div class="menu-icon"></div>
				</div>
				<aside class="cart-container flex-center aside-container">
					<div class="close-cart">
						<i class="fa-solid fa-circle-xmark"></i>
					</div>					
					<h3 class="aside-title">Shopping Cart</h3>
					<div class="cart-content flex-center">

					</div>
				</aside>
				<form
					action=""
					class="login-form aside-container"
				>
					<div class="close-login">
						<i class="fa-solid fa-circle-xmark"></i>
					</div>
					<div class="flex-center login-inputs">
						<h3 class="aside-title">Login form</h3>
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
					</div>
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
		$cartContainer = d.querySelector(".cart-container"),
		$closeCart = d.querySelector(".close-cart");

	const $loginIcon = d.querySelector(".login-icon i"),
		$loginForm = d.querySelector(".login-form"),
		$closeLogin = d.querySelector(".close-login");

	const $menuIcon = d.querySelector(".menu-icon"),
		$mobileNav = d.querySelector(".mobile-nav");

	// Shopping Cart *******

	updateCartData();
	createCartContent();

	$cartIcon.addEventListener("click", () => {
		$cartContainer.classList.toggle("active");
		$loginForm.classList.remove("active");
		$mobileNav.classList.remove("active");
		drawMenuIcon();
	});

	$closeCart.addEventListener("click", () => {
		$cartContainer.classList.remove("active");
	});

	// Login Form ******

	$loginIcon.addEventListener("click", () => {
		$loginForm.classList.toggle("active");
		$cartContainer.classList.remove("active");
		$mobileNav.classList.remove("active");
		drawMenuIcon();
	});

	$closeLogin.addEventListener("click", () => {
		$loginForm.classList.remove("active");
	});

	// Mobile Menu *******
	const drawMenuIcon = () => {
		setTimeout(() => {
			if ($mobileNav.classList.contains("active")) {
				$menuIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
			} else {
				$menuIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
			}
		}, 400);
	};
	drawMenuIcon();

	$menuIcon.addEventListener("click", () => {
		$mobileNav.classList.toggle("active");
		$loginForm.classList.remove("active");
		$cartContainer.classList.remove("active");
		drawMenuIcon();
	});
};
