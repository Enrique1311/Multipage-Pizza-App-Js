import { createHeader } from "../helpers/createHeader.js";
import { pageHeading } from "../helpers/createPageHeading.js";
import { createFooter } from "../helpers/createFooter.js";

const d = document;

const $gallery = d.querySelector(".gallery");

// Header *******************************************
createHeader();

// Page Heading ********************************
pageHeading("Our Gallery");

// Footer *******************************************
createFooter();

const galleryImages = [
	"../assets/imgs/gallery-img-1.jpg",
	"../assets/imgs/gallery-img-2.jpg",
	"../assets/imgs/gallery-img-3.jpg",
	"../assets/imgs/gallery-img-4.jpg",
	"../assets/imgs/gallery-img-5.jpg",
	"../assets/imgs/gallery-img-6.jpg",
	"../assets/imgs/gallery-img-7.jpg",
	"../assets/imgs/gallery-img-8.jpg",
	"../assets/imgs/gallery-img-9.jpg",
	"../assets/imgs/gallery-img-10.jpg",
	"../assets/imgs/gallery-img-11.jpg",
	"../assets/imgs/gallery-img-12.jpg",
	"../assets/imgs/gallery-img-13.jpg",
	"../assets/imgs/gallery-img-14.jpg",
	"../assets/imgs/gallery-img-15.jpg",
	"../assets/imgs/gallery-img-16.jpg",
	"../assets/imgs/gallery-img-17.jpg",
	"../assets/imgs/gallery-img-18.jpg",
	"../assets/imgs/gallery-img-19.jpg",
	"../assets/imgs/gallery-img-20.jpg",
];

for (let i = 0; i < galleryImages.length; i++) {
	$gallery.innerHTML += `
					<a href="${galleryImages[i]}">
						<img
							src="${galleryImages[i]}"
							alt="Image"
						/>
						<div class="gallery-plus-bg flex-center">
							<div class="gallery-plus-icon flex-center">
								<i class="fa-solid fa-plus"></i>
							</div>
						</div>
					</a>
`;
}

d.addEventListener("DOMContentLoaded", () => {
	lightGallery(document.querySelector(".gallery"));
});
