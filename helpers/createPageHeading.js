// **************************************************
// ** Page Heading *******************************************

export const pageHeading = (title) => {
	const $pageHeading = document.querySelector(".page-heading");
	console.log($pageHeading);

	$pageHeading.innerHTML = `
        <div class="heading-content">
			<h1>${title}</h1>
			<p><a href="../../index.html">Home >>></a></p>
		</div>
    `;
};
