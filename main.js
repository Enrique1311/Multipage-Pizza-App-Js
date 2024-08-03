const d = document;

// **************************************************
// ** Header *******************************************

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

// **********************************************
// ** Home Page *****************************************

// Home Slider Section *********************

const homeSlider = [
	{
		url: "./img/slider-img-1.jpg",
		text: "The <span>Tastiest</span> Pizza <br /> On The Planet",
	},
	{
		url: "./img/slider-img-2.jpg",
		text: "Our Pizza Makers Are <br /> <span>Top Professionals</span>",
	},
	{
		url: "./img/slider-img-3.jpg",
		text: "Products Made With <span>Pride <br /> And Dedication</span>",
	},
	{
		url: "./img/slider-img-4.jpg",
		text: "We Cook With <br /> Our <span>Wood Oven</span>",
	},
	{
		url: "./img/slider-img-5.jpg",
		text: "We <span>Deliver</span> Our Pizzas <br /> To Your Home",
	},
];

const $sliderLeftBtn = d.querySelector(".slider-left-btn"),
	$sliderRightBtn = d.querySelector(".slider-right-btn"),
	$homeSlider = d.querySelector(".home-slider"),
	$homeSliderItem = d.querySelector(".home-slider-item"),
	$homeSliderTemplate = d.getElementById("home-slider-template").content,
	$homeSliderFragment = d.createDocumentFragment();

function createSlider() {
	homeSlider.forEach((el) => {
		$homeSliderTemplate
			.querySelector(".home-slider-item img")
			.setAttribute("src", el.url);

		$homeSliderTemplate.querySelector(".home-slider-text h3").innerHTML =
			el.text;

		let $sliderClone = d.importNode($homeSliderTemplate, true);
		$homeSliderFragment.appendChild($sliderClone);
	});

	$homeSlider.appendChild($homeSliderFragment);
}
createSlider();

function moveSlider() {
	const $allSliderItems = d.querySelectorAll(".home-slider-item");
	$allSliderItems[0].classList.add("active-item");

	let i = 0;

	$sliderLeftBtn.addEventListener("click", (e) => {
		$allSliderItems[i].classList.remove("active-item");
		i--;

		if (i < 0) {
			i = $allSliderItems.length - 1;
		}

		$allSliderItems[i].classList.add("active-item");
	});

	$sliderRightBtn.addEventListener("click", (e) => {
		$allSliderItems[i].classList.remove("active-item");
		i++;

		if (i > $allSliderItems.length - 1) {
			i = 0;
		}

		$allSliderItems[i].classList.add("active-item");
	});
}
moveSlider();

// Home Banner Section *********************

const homeBanner = [
	{
		url: "./img/banner-1.jpg",
		text: "Pizza",
	},
	{
		url: "./img/banner-2.jpg",
		text: "Desserts",
	},
	{
		url: "./img/banner-3.jpg",
		text: "Pasta",
	},
	{
		url: "./img/banner-4.jpg",
		text: "Wines",
	},
];

const createBanners = () => {
	const $homeBannerContent = d.querySelector(".home-banner-content"),
		$homeBannerTemplate = d.getElementById("home-banner-template").content,
		$homeBannerFragment = d.createDocumentFragment();

	homeBanner.forEach((el) => {
		$homeBannerTemplate.querySelector(".home-banner-img").src = el.url;
		$homeBannerTemplate.querySelector(".home-banner-text").textContent =
			el.text;

		let $bannerClone = d.importNode($homeBannerTemplate, true);
		$homeBannerFragment.appendChild($bannerClone);
	});

	$homeBannerContent.appendChild($homeBannerFragment);
};
createBanners();

// Home Steps Section *************************************

const homeSteps = [
	{
		url: "./img/steps-1.png",
		text: "Choose your favorite food",
	},
	{
		url: "./img/steps-2.png",
		text: "free and fast delivery",
	},
	{
		url: "./img/steps-3.png",
		text: "easy payments methods",
	},
	{
		url: "./img/steps-4.png",
		text: "and finally, enjoy your food!",
	},
];

const createSteps = () => {
	const $homeStepsContent = d.querySelector(".home-steps-content"),
		$homeStepsTemplate = d.getElementById("home-steps-template").content,
		$homeStepsFragment = d.createDocumentFragment();

	homeSteps.forEach((el) => {
		$homeStepsTemplate.querySelector(".home-steps-item img").src = el.url;
		$homeStepsTemplate.querySelector(".home-steps-item h3").textContent =
			el.text;

		let $stepsClone = d.importNode($homeStepsTemplate, true);
		$homeStepsFragment.appendChild($stepsClone);
	});

	$homeStepsContent.appendChild($homeStepsFragment);
};
createSteps();

// Home Menu Section *************************************

const homeMenu = [
	{
		urlImage: "./img/pizza.png",
		name: "Margarita",
		detail:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quo dolore esse ab eligendi, repudiandae minus perspiciatis ad quae aliquid et odit cum placeat optio reiciendis.",
		price: "15.00",
	},
	{
		urlImage: "./img/pizza.png",
		name: "Peperonni",
		detail:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quo dolore esse ab eligendi, repudiandae minus perspiciatis ad quae aliquid et odit cum placeat optio reiciendis.",
		price: "18.00",
	},
	{
		urlImage: "./img/pizza.png",
		name: "American",
		detail:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quo dolore esse ab eligendi, repudiandae minus perspiciatis ad quae aliquid et odit cum placeat optio reiciendis.",
		price: "14.00",
	},
	{
		urlImage: "./img/pizza.png",
		name: "Italian",
		detail:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quo dolore esse ab eligendi, repudiandae minus perspiciatis ad quae aliquid et odit cum placeat optio reiciendis.",
		price: "20.00",
	},
	{
		urlImage: "./img/pizza.png",
		name: "Cheese",
		detail:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quo dolore esse ab eligendi, repudiandae minus perspiciatis ad quae aliquid et odit cum placeat optio reiciendis.",
		price: "16.00",
	},
	{
		urlImage: "./img/pizza.png",
		name: "Double Cheese",
		detail:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quo dolore esse ab eligendi, repudiandae minus perspiciatis ad quae aliquid et odit cum placeat optio reiciendis.",
		price: "21.00",
	},
];

const createMenu = () => {
	const $homeMenuContent = d.querySelector(".home-menu-content"),
		$homeMenuTemplate = d.getElementById("home-menu-template").content,
		$homeMenuFragment = d.createDocumentFragment();

	homeMenu.forEach((el) => {
		$homeMenuTemplate.querySelector(".home-menu-item img").src = el.urlImage;
		$homeMenuTemplate.querySelector(".home-menu-item h3").textContent = el.name;
		$homeMenuTemplate.querySelector(".home-menu-item p").textContent =
			el.detail;
		$homeMenuTemplate.querySelector(
			".item-price"
		).innerHTML = `<h4>$${Math.floor(el.price * 0.8)}.00 <span>$${
			el.price
		}</span></h4>`;

		let $menuClone = d.importNode($homeMenuTemplate, true);
		$homeMenuFragment.appendChild($menuClone);
	});

	$homeMenuContent.appendChild($homeMenuFragment);
};
createMenu();

// **********************************************
// ** About Us Page *****************************************
