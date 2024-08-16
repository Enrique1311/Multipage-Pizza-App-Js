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
	"../img/gallery-img-1.jpg",
	"../img/gallery-img-2.jpg",
	"../img/gallery-img-3.jpg",
	"../img/gallery-img-4.jpg",
	"../img/gallery-img-5.jpg",
	"../img/gallery-img-6.jpg",
	"../img/gallery-img-7.jpg",
	"../img/gallery-img-8.jpg",
	"../img/gallery-img-9.jpg",
	"../img/gallery-img-10.jpg",
	"../img/gallery-img-11.jpg",
	"../img/gallery-img-12.jpg",
	"../img/gallery-img-13.jpg",
	"../img/gallery-img-14.jpg",
	"../img/gallery-img-15.jpg",
	"../img/gallery-img-16.jpg",
	"../img/gallery-img-17.jpg",
	"../img/gallery-img-18.jpg",
	"../img/gallery-img-19.jpg",
	"../img/gallery-img-20.jpg",
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
