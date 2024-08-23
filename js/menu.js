import { createHeader } from "../helpers/createHeader.js";
import { pageHeading } from "../helpers/createPageHeading.js";
import { createFooter } from "../helpers/createFooter.js";
import { addToCart } from "../helpers/cartService.js";
import { createCartContent } from "../helpers/cartService.js";

// Header *******************************************
createHeader();

// Menu Page Heading ********************************
pageHeading("Menu");

// Footer *******************************************
createFooter();

// Menu Page Content ********************************

const d = document;
const $menu = d.querySelector(".menu");

const $pizzasContent = d.getElementById("pizzas");
const $pastasContent = d.getElementById("pastas");
const $dessertsContent = d.getElementById("desserts");
const $winesContent = d.getElementById("wines");

const createMenuItem = (prod, content) => {
	const $newProduct = d.createElement("article");

	$newProduct.classList.add("menu-item");
	$newProduct.classList.add("flex-col");

	$newProduct.innerHTML = `
		<div class="menu-item-name">
			<h3>${prod.name}</h3>
			<p>${prod.ingredients}</p>
		</div>
		<div class="item-price flex-center">
			<h2>$${prod.price}</h2>
			<button class="main-btn">Add to cart</button>
		</div>
	`;

	content.appendChild($newProduct);

	$newProduct.querySelector("button").addEventListener("click", () => {
		addToCart(prod);
		createCartContent();
	});
};

const getMenu = async () => {
	try {
		let res = await fetch("../assets/db/menuData.json");
		let data = await res.json();
		if (!res.ok) throw { statusText: res.statusText };

		data.pizzas.forEach((el) => {
			createMenuItem(el, $pizzasContent);
		});

		data.pastas.forEach((el) => {
			createMenuItem(el, $pastasContent);
		});

		data.desserts.forEach((el) => {
			createMenuItem(el, $dessertsContent);
		});

		data.wines.forEach((el) => {
			createMenuItem(el, $winesContent);
		});
	} catch (err) {
		let message = err.statusText || "Not Found";
		$menu.innerHTML = `<p><b>Error: ${message}</b></p>`;
	}
};
getMenu();
