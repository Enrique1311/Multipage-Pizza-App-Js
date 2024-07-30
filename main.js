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
	console.log($allSliderItems);

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

// Home Banner *********************

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
