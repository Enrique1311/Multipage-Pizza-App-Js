import { createHeader } from "../helpers/createHeader.js";
import { createFooter } from "../helpers/createFooter.js";
const d = document;

// Header *******************************************
createHeader();

// Footer *******************************************
createFooter();

// Home Slider Section *********************

const homeSlider = [
	{
		url: "../assets/imgs/slider-img-1.jpg",
		text: "The <span>tastiest</span> Pizza <br /> On The Planet",
	},
	{
		url: "../assets/imgs/slider-img-2.jpg",
		text: "Our Pizza Makers Are <br /> <span>Top Professionals</span>",
	},
	{
		url: "../assets/imgs/slider-img-3.jpg",
		text: "Products Made With <span>Pride <br /> And Dedication</span>",
	},
	{
		url: "../assets/imgs/slider-img-4.jpg",
		text: "We Cook With <br /> Our <span>Wood Oven</span>",
	},
	{
		url: "../assets/imgs/slider-img-5.jpg",
		text: "We <span>Deliver</span> Our Pizzas <br /> To Your Home",
	},
];

const $sliderLeftBtn = d.querySelector(".slider-left-btn"),
	$sliderRightBtn = d.querySelector(".slider-right-btn"),
	$homeSlider = d.querySelector(".home-slider"),
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
		url: "../assets/imgs/banner-1.jpg",
		text: "Pizza",
	},
	{
		url: "../assets/imgs/banner-3.jpg",
		text: "Pasta",
	},
	{
		url: "../assets/imgs/banner-2.jpg",
		text: "Desserts",
	},

	{
		url: "../assets/imgs/banner-4.jpg",
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
		url: "../assets/imgs/steps-1.png",
		text: "Choose your favorite food",
	},
	{
		url: "../assets/imgs/steps-2.png",
		text: "free and fast delivery",
	},
	{
		url: "../assets/imgs/steps-3.png",
		text: "easy payments methods",
	},
	{
		url: "../assets/imgs/steps-4.png",
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
		urlImage: "../assets/imgs/pizza.png",
		name: "Margarita",
		detail:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quo dolore esse ab eligendi, repudiandae minus perspiciatis ad quae aliquid et odit cum placeat optio reiciendis.",
		price: "15.00",
	},
	{
		urlImage: "../assets/imgs/pizza.png",
		name: "Peperonni",
		detail:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quo dolore esse ab eligendi, repudiandae minus perspiciatis ad quae aliquid et odit cum placeat optio reiciendis.",
		price: "18.00",
	},
	{
		urlImage: "../assets/imgs/pizza.png",
		name: "American",
		detail:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quo dolore esse ab eligendi, repudiandae minus perspiciatis ad quae aliquid et odit cum placeat optio reiciendis.",
		price: "14.00",
	},
	{
		urlImage: "../assets/imgs/pizza.png",
		name: "Italian",
		detail:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quo dolore esse ab eligendi, repudiandae minus perspiciatis ad quae aliquid et odit cum placeat optio reiciendis.",
		price: "20.00",
	},
	{
		urlImage: "../assets/imgs/pizza.png",
		name: "Cheese",
		detail:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quo dolore esse ab eligendi, repudiandae minus perspiciatis ad quae aliquid et odit cum placeat optio reiciendis.",
		price: "16.00",
	},
	{
		urlImage: "../assets/imgs/pizza.png",
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
