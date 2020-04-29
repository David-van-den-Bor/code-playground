/* separate event listeners ----------------------------
*/

document.addEventListener('mouseover', function (event) {  	
	if (!event.target.matches('.hallo')) return;
	document.querySelector(".notitie").textContent = "De muis is OVER Hallo!";
});

document.addEventListener('mouseover', function (event) {
	if (!event.target.matches('.totziens')) return;
	document.querySelector(".notitie").textContent = "De muis is OVER Tot ziens!";
});

/* combined event listeners ----------------------------
*/

document.addEventListener('click', function (event) {

	if (event.target.matches('.hallo')) {
		 	document.querySelector(".notitie").textContent = "Je hebt GEKLIKT op: Hallo!";
		return;
	}

	if (event.target.matches('.totziens')) {
			document.querySelector(".notitie").textContent = "Je hebt GEKLIKT op: Tot ziens!";
		return;
	}

});