import { createHeader } from "../helpers/createHeader.js";
import { pageHeading } from "../helpers/createPageHeading.js";
import { createFooter } from "../helpers/createFooter.js";
import { addToCart, removeProdToCart } from "../helpers/cartService.js";

// Header *******************************************
createHeader();

// Menu Page Heading ********************************
pageHeading("Shopping Cart");

// Footer *******************************************
createFooter();

// Menu Page Content ********************************

const d = document;
const $cartContainer = d.querySelector(".cart-container");

const createCartContent = () => {
	let products = JSON.parse(localStorage.getItem("cartItems"));

	let totalPrice = 0;

	if (!products || products.lenght === 0) {
		$cartContainer.innerHTML = `
			<div  class="empty-cart flex-center">
				<h3>You don´t have products in your Shopping cart!</h3>
				<a href="./menu.js" class="main-btn">Select products</a>	
			</div>
		`;
	} else {
		products.forEach((product) => {
			const $cartItems = d.querySelector(".cart-items");
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

			$cartItems.appendChild($newProduct);

			totalPrice = totalPrice + product.price * product.quantity;

			d.querySelector(".cart-subt-btn").addEventListener("click", () => {
				$cartContainer.innerHTML = "";
				removeProdToCart(product);
				createCartContent();
			});

			d.querySelector(".cart-plus-btn").addEventListener("click", () => {
				addToCart(product);
			});
		});
		d.querySelector(".total-price").innerText = `Total: $${totalPrice}`;
	}
};
createCartContent();
