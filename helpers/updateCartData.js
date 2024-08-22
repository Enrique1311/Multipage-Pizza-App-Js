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
