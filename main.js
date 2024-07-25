const d = document;

// **************************************************
// Header *******************************************

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
// Home *****************************************

// Home Slider *********************

const homeSlider = [
	"./img/slider-img-1.jpg",
	"./img/slider-img-2.jpg",
	"./img/slider-img-3.jpg",
	"./img/slider-img-4.jpg",
	"./img/slider-img-5.jpg",
];

const $sliderLeftBtn = d.querySelector(".slider-left-btn"),
	$sliderRightBtn = d.querySelector(".slider-right-btn"),
	$homeSlider = d.querySelector(".home-slider"),
	$homeSliderItem = d.querySelector(".home-slider-item"),
	$homeSliderTemplate = d.getElementById("home-slider-template").content,
	$homeSliderFragment = d.createDocumentFragment();

homeSlider.forEach((el) => {
	$homeSliderTemplate
		.querySelector(".home-slider-item img")
		.setAttribute("src", el);

	let $sliderClone = d.importNode($homeSliderTemplate, true);
	$homeSliderFragment.appendChild($sliderClone);
});

$homeSlider.appendChild($homeSliderFragment);

$sliderLeftBtn.addEventListener("click", () => {
	let $firstSlide = d.querySelectorAll(".home-slider-item")[0];
	console.log($firstSlide);
});
