import { createHeader } from "../helpers/createHeader.js";
import { pageHeading } from "../helpers/createPageHeading.js";
import { createFooter } from "../helpers/createFooter.js";

const d = document;

// Header *******************************************
createHeader();

// Menu Page Heading ********************************
pageHeading("Menu");

// Footer *******************************************
createFooter();

// Menu Page Content ********************************
const $menu = d.querySelector(".menu");

const getMenu = async () => {
	try {
		let res = await fetch("../assets/db/menuData.json");

		let data = await res.json();
		console.log(data);

		if (!res.ok) throw { statusText: res.statusText };

		data.forEach((el) => {
			s;
		});
	} catch (err) {
		let message = err.statusText || "Not Found";
		$menu.innerHTML = `<p><b>Error: ${message}</b></p>`;
	}
};
getMenu();
