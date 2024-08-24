import { createHeader } from "../helpers/createHeader.js";
import { pageHeading } from "../helpers/createPageHeading.js";
import { createFooter } from "../helpers/createFooter.js";

// Header *******************************************
createHeader();

// Menu Page Heading ********************************
pageHeading("Shopping Cart");

// Footer *******************************************
createFooter();

// Menu Page Content ********************************

const d = document;

const getNewProduct = (product) => {
	const newProduct = product;
	newProduct.quantity = 1;
	return newProduct;
};

export const createCartContent = () => {
	const $cartContent = document.querySelector(".cart-content");
	console.log($cartContent);

	let products = JSON.parse(localStorage.getItem("cartItems"));

	let totalPrice = 0;

	if (!products || products.lenght === 0) {
		$cartContent.innerHTML = `<p class="empty-cart">The cart is empty!</p>`;
	} else {
		$cartContent.innerHTML = `
			<div class="cart-items flex-col">
			</div>
			<h3 class="total-price"></h3>
			<a
				href="#"
				class="main-btn"
				>Buy now</a
			>
		`;

		products.forEach((product) => {
			const $cartItems = document.querySelector(".cart-items");

			$cartItems.innerHTML += `
			<div class="cart-item flex-between">
				<div class="flex-between">
					<div class="cart-plus-subt-btns">
						<div class="cart-plus-btn"><i class="fa-solid fa-caret-up"></i></div>
						<div class="cart-subt-btn"><i class="fa-solid fa-caret-down"></i></div>
					</div>
					<div class="cart-item-content">
						<h3>${product.name}</h3>
						<span class="quantity">${product.quantity}</span>
						<span class="multiply">x</span>
						<span class="price">$${product.price}</span>
					</div>
				</div>
				<div class="del-item-btn"><i class="fa-solid fa-xmark"></i></div>
			</div>

			`;

			document.querySelector(".cart-plus-btn").addEventListener("click", () => {
				addToCart(product);
				openModal(product);
				createCartContent();
			});

			document
				.querySelector(".cart-item .cart-subt-btn")
				.addEventListener("click", () => {
					removeProdToCart(product);
					createCartContent();
				});

			totalPrice = totalPrice + product.quantity * product.price;
		});
		const $totalPrice = document.querySelector(".total-price");
		$totalPrice.innerText = `Total: $${totalPrice}`;
	}
};
createCartContent();
