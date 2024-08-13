import { createHeader } from "../helpers/createHeader.js";
import { pageHeading } from "../helpers/createPageHeading.js";
import { createFooter } from "../helpers/createFooter.js";

const d = document;
const $menu = d.querySelector(".menu");

// Header *******************************************
createHeader();

// Menu Page Heading ********************************
pageHeading("Menu");

// Footer *******************************************
createFooter();

// Menu Page Content ********************************

const $pizzasContent = d.getElementById("pizzas");
const $pastasContent = d.getElementById("pastas");
const $dessertsContent = d.getElementById("desserts");
const $winesContent = d.getElementById("wines");

const writeMenuItems = (el, content) => {
	content.innerHTML += `
		<article class="menu-item">
			<div class="menu-item-name">
				<h3>${el.name}</h3>
				<p>${el.ingredients}</p>
			</div>
			<div class="item-price">
				<h2>$${el.price}</h2>
			</div>
		</article>
`;
};

const getMenu = async () => {
	try {
		let res = await fetch("../assets/db/menuData.json");

		let data = await res.json();
		console.log(data);

		if (!res.ok) throw { statusText: res.statusText };

		data.pizzas.forEach((el) => {
			writeMenuItems(el, $pizzasContent);
		});

		data.pastas.forEach((el) => {
			writeMenuItems(el, $pastasContent);
		});

		data.desserts.forEach((el) => {
			writeMenuItems(el, $dessertsContent);
		});

		data.wines.forEach((el) => {
			writeMenuItems(el, $winesContent);
		});
	} catch (err) {
		let message = err.statusText || "Not Found";
		$menu.innerHTML = `<p><b>Error: ${message}</b></p>`;
	}
};
getMenu();
