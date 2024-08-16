// **************************************************
// ** Page Heading *******************************************

export const pageHeading = (title) => {
	const $pageHeading = document.querySelector(".page-heading");

	$pageHeading.innerHTML = `
        <div class="heading-content">
			<h1>${title}</h1>
			<a href="../../index.html">Home >>></a>
		</div>
    `;
};
