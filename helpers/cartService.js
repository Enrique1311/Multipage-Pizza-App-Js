export const updateCartData = () => {
	const $cartAmount = document.querySelector(".cart-amount"),
		locStorMemory = JSON.parse(localStorage.getItem("cartItems"));

	if (locStorMemory) {
		const total = locStorMemory.reduce(
			(acum, current) => acum + current.quantity,
			0
		);
		$cartAmount.innerText = total;
	}
};

// This modal says that the product has already been added to the cart
const openModal = (product) => {
	const $modalContainer = document.querySelector(".modal-container");

	$modalContainer.querySelector(".modal").innerHTML = `
		<img src="../assets/imgs/pizza-box.png" alt="pizza box"/>
		<h2>${product.name}</h2>
		<p>has been added to the cart...</p>
	`;

	$modalContainer.classList.add("open");

	setTimeout(() => {
		$modalContainer.classList.remove("open");
	}, 3000);
};

const getNewProduct = (product) => {
	const newProduct = product;
	newProduct.quantity = 1;
	return newProduct;
};

export const createCartContent = () => {
	const $cartContent = document.querySelector(".cart-content");

	let products = JSON.parse(localStorage.getItem("cartItems"));

	let totalPrice = 0;

	if (!products || products.lenght === 0) {
		$cartContent.innerHTML = `<p class="empty-cart">The cart is empty!</p>`;
	} else {
		$cartContent.innerHTML = `
			<div class="cart-items flex-col">
			</div>
			<h3 class="total-price">Total: $40</h3>
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
			totalPrice = totalPrice + product.quantity * product.price;
		});
		const $totalPrice = document.querySelector(".total-price");
		$totalPrice.innerText = `Total: $${totalPrice}`;
	}
};

export const addToCart = (product) => {
	openModal(product);

	let memory = JSON.parse(localStorage.getItem("cartItems"));
	let finalProdQuantity;

	if (!memory || memory.lenght === 0) {
		const newProduct = getNewProduct(product);
		localStorage.setItem("cartItems", JSON.stringify([newProduct]));
		finalProdQuantity = 1;
		updateCartData();
	} else {
		const productIndex = memory.findIndex((item) => item.id === product.id);
		const newMemory = memory;

		if (productIndex === -1) {
			const newProduct = getNewProduct(product);
			newMemory.push(newProduct);
			finalProdQuantity = 1;
		} else {
			newMemory[productIndex].quantity++;
			finalProdQuantity = newMemory[productIndex].quantity;
		}
		localStorage.setItem("cartItems", JSON.stringify(newMemory));
		updateCartData();
		return finalProdQuantity;
	}
};
