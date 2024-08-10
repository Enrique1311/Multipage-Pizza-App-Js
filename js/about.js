import { createHeader } from "../helpers/createHeader.js";
import { pageHeading } from "../helpers/createPageHeading.js";
import { createFooter } from "../helpers/createFooter.js";

const d = document;

// **************************************************
// ** Header *******************************************

createHeader();

// **************************************************
// ** Footer *******************************************

createFooter();

// **************************************************
// ** Page Heading ********************************

pageHeading("About Us");

// Our Log Section ********************************

const blogItems = [
	{
		urlImage: "./img/blog-img-1.jpg",
		date: "jul 06 2024",
		user: "admin",
		title: "Slices Of Delight: Exploring the world of pizza",
		comment:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quo dolore esse ab eligendi, repudiandae minus perspiciatis ad quae aliquid et odit cum placeat optio reiciendis.",
	},
	{
		urlImage: "./img/blog-img-2.jpg",
		date: "jul 06, 2024",
		user: "admin",
		title: "Slices Of Delight: Exploring the world of pizza",
		comment:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quo dolore esse ab eligendi, repudiandae minus perspiciatis ad quae aliquid et odit cum placeat optio reiciendis.",
	},
	{
		urlImage: "./img/blog-img-3.jpg",
		date: "jul 12, 2024",
		user: "admin",
		title: "Slices Of Delight: Exploring the world of pizza",
		comment:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quo dolore esse ab eligendi, repudiandae minus perspiciatis ad quae aliquid et odit cum placeat optio reiciendis.",
	},
	{
		urlImage: "./img/blog-img-4.jpg",
		date: "jul 12, 2024",
		user: "admin",
		title: "Slices Of Delight: Exploring the world of pizza",
		comment:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quo dolore esse ab eligendi, repudiandae minus perspiciatis ad quae aliquid et odit cum placeat optio reiciendis.",
	},
	{
		urlImage: "./img/blog-img-5.jpg",
		date: "jul 12, 2024",
		user: "admin",
		title: "Slices Of Delight: Exploring the world of pizza",
		comment:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quo dolore esse ab eligendi, repudiandae minus perspiciatis ad quae aliquid et odit cum placeat optio reiciendis.",
	},
	{
		urlImage: "./img/blog-img-6.jpg",
		date: "jul 12, 2024",
		user: "admin",
		title: "Slices Of Delight: Exploring the world of pizza",
		comment:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quo dolore esse ab eligendi, repudiandae minus perspiciatis ad quae aliquid et odit cum placeat optio reiciendis.",
	},
	{
		urlImage: "./img/blog-img-7.jpg",
		date: "jul 12, 2024",
		user: "admin",
		title: "Slices Of Delight: Exploring the world of pizza",
		comment:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quo dolore esse ab eligendi, repudiandae minus perspiciatis ad quae aliquid et odit cum placeat optio reiciendis.",
	},
	{
		urlImage: "./img/blog-img-8.jpg",
		date: "jul 12, 2024",
		user: "admin",
		title: "Slices Of Delight: Exploring the world of pizza",
		comment:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quo dolore esse ab eligendi, repudiandae minus perspiciatis ad quae aliquid et odit cum placeat optio reiciendis.",
	},
	{
		urlImage: "./img/blog-img-9.jpg",
		date: "jul 12, 2024",
		user: "admin",
		title: "Slices Of Delight: Exploring the world of pizza",
		comment:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quo dolore esse ab eligendi, repudiandae minus perspiciatis ad quae aliquid et odit cum placeat optio reiciendis.",
	},
];

const createBlog = () => {
	const $blogContainer = d.querySelector(".blog-container"),
		$blogTemplate = d.getElementById("blog-template").content,
		$blogFragment = d.createDocumentFragment();

	blogItems.forEach((el) => {
		$blogTemplate.querySelector(".blog-item-img img").src = el.urlImage;
		$blogTemplate.querySelector(".blog-date").textContent = el.date;
		$blogTemplate.querySelector(".blog-user").textContent = el.user;
		$blogTemplate.querySelector(".blog-title").textContent = el.title;
		$blogTemplate.querySelector(".blog-comment").textContent = el.comment;

		let $blogClone = d.importNode($blogTemplate, true);
		$blogFragment.appendChild($blogClone);
	});

	$blogContainer.appendChild($blogFragment);
};
createBlog();
