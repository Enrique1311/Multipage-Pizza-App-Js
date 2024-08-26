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
export const openModal = (product) => {
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

export const addToCart = (product) => {
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

export const removeProdToCart = (product) => {
	let memory = JSON.parse(localStorage.getItem("cartItems"));
	const productIndex = memory.findIndex((item) => item.id === product.id);

	if (memory[productIndex].quantity === 1) {
		memory.splice(productIndex, 1);
		localStorage.setItem("cartItems", JSON.stringify(memory));
	} else {
	}
};
