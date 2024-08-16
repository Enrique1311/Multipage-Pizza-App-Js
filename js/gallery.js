import { createHeader } from "../helpers/createHeader.js";
import { pageHeading } from "../helpers/createPageHeading.js";
import { createFooter } from "../helpers/createFooter.js";

const d = document;

const $galleryContainer = d.querySelector(".gallery-container"),
	$galleryTemplate = d.getElementById("gallery-template").content,
	$galleryFragment = d.createDocumentFragment();

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
];

for (let i = 0; i < galleryImages.length; i++) {
	$galleryTemplate.querySelector("a").href = galleryImages[i];
	$galleryTemplate.querySelector("img").src = galleryImages[i];

	let $galleryClone = d.importNode($galleryTemplate, true);
	$galleryFragment.appendChild($galleryClone);
}

$galleryContainer.appendChild($galleryFragment);
