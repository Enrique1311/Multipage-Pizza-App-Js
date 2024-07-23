const d = document,
	$cartIcon = d.querySelector(".cart-icon i"),
	$cartContainer = d.querySelector(".cart-container");

console.log($cartIcon, $cartContainer);

$cartIcon.addEventListener("click", () => {
	$cartContainer.classList.toggle("active");
});
