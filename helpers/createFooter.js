// **************************************************
// ** Footer *******************************************

export const createFooter = () => {
	const $footer = document.querySelector("footer");

	$footer.innerHTML = `
			<div class="footer-container section-padding">
				<div class="footer-item">
					<h3>Find us here</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					<div class="footer-media">
						<a href="#"><i class="fa-brands fa-facebook-f"></i></a>
						<a href="#"><i class="fa-brands fa-x-twitter"></i></a>
						<a href="#"><i class="fa-brands fa-instagram"></i></a>
						<a href="#"><i class="fa-brands fa-tiktok"></i></a>
					</div>
				</div>
				<div class="footer-item">
					<h3>Contact us</h3>
					<p><i class="fa-brands fa-whatsapp"></i> +123-456-7890</p>
					<a
						href="#"
						class="footer-email"
						><i class="fa-regular fa-envelope"></i> pizza.email@gmail.com</a
					>
				</div>
				<div class="footer-item">
					<h3>Localization</h3>
					<p>Humbold 5555 (Palermo)</p>
					<p>Ciudad de Buenos Aires</p>
					<p>Argentina</p>
				</div>
			</div>
			<div class="credits">
				<p>Created by <span>EJS Coder</span> - All rights reserved</p>
			</div>
    `;
};
