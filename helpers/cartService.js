const addToCart = (product) => {
	const cartLocStorage = localStorage.getItem("cart-items");

	if (!cartLocStorage) {
		const newProduct = product;
		newProduct.quantity = 1;

		localStorage.setItem("cart-items", JSON.stringify([newProduct]));
	}
};
