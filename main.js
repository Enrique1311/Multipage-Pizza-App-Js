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

function createSlider() {
	console.log();
	homeSlider.forEach((el, i) => {
		console.log(i);

		if (i === 0) {
			$homeSliderTemplate
				.querySelector(".home-slider-item")
				.classList.add("active-item");
		}

		$homeSliderTemplate
			.querySelector(".home-slider-item img")
			.setAttribute("src", el);

		let $sliderClone = d.importNode($homeSliderTemplate, true);
		$homeSliderFragment.appendChild($sliderClone);
	});

	$homeSlider.appendChild($homeSliderFragment);
}
createSlider();

function moveSlider() {
	const $allSliderItems = d.querySelectorAll(".home-slider-item");
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
}
moveSlider();
