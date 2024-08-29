import { createHeader } from "../helpers/createHeader.js";
import { pageHeading } from "../helpers/createPageHeading.js";
import { createFooter } from "../helpers/createFooter.js";
import {
	addToCart,
	deleteCartItem,
	removeProdToCart,
} from "../helpers/cartService.js";

const d = document,
	$cartContainer = d.querySelector(".cart-container");

// Header *******************************************
createHeader();

// Menu Page Heading ********************************
pageHeading("Shopping Cart");

// Footer *******************************************
createFooter();

// Menu Page Content ********************************

const createCartContent = () => {
	$cartContainer.innerHTML = "";
	let products = JSON.parse(localStorage.getItem("cartItems"));
	console.log(products);

	let totalPrice = 0;

	if (!products || products.length === 0) {
		$cartContainer.innerHTML = `
			<div  class="empty-cart flex-center">
				<h3>You don´t have products in your Shopping cart!</h3>
				<img src="../assets/imgs/cart-img.png" alt=""/>
				<a href="menu.html" class="main-btn">Select products</a>	
			</div>
		`;
	} else {
		$cartContainer.innerHTML = `
				<div class="cart-items flex-center"></div>
				<div class="cart-total flex-center">
					<h3 class="total-price"></h3>
					<button class="main-btn">Buy now</button>
				</div>
		`;

		const $cartItems = d.querySelector(".cart-items");

		products.forEach((product) => {
			const $newProduct = d.createElement("div");
			$newProduct.classList.add("flex-between");
			$newProduct.classList.add("cart-item");
			$newProduct.innerHTML = `
					<div class="cart-item-content flex-between">
						<div class="cart-item-detail flex-between">
							<div class="flex-between">
								<button class="cart-subt-btn">
									<i class="fa-solid fa-minus"></i>
								</button>						
								<p class="cart-item-quantity">${product.quantity}</p>
								<button class="cart-plus-btn flex-center">
									<i class="fa-solid fa-plus"></i>
								</button>
							</div>				
							<h3>${product.name}</h3>
						</div>
						<p>$${product.price * product.quantity}</p>
					</div>
					<div class="del-item-btn">
						<i class="fa-solid fa-xmark"></i>
					</div>
			`;

			$newProduct
				.querySelector(".cart-subt-btn")
				.addEventListener("click", () => {
					removeProdToCart(product);
					createCartContent();
				});

			$newProduct
				.querySelector(".cart-plus-btn")
				.addEventListener("click", () => {
					addToCart(product);
					createCartContent();
				});

			$newProduct
				.querySelector(".del-item-btn")
				.addEventListener("click", () => {
					deleteCartItem(product);
					createCartContent();
				});

			$cartItems.appendChild($newProduct);

			totalPrice = totalPrice + product.price * product.quantity;
		});

		d.querySelector(".total-price").innerText = `Total: $${totalPrice}`;
	}
};
createCartContent();
