// Example of a nested JSON call to fetch data through the Github API:
// <li> <img src="${owner["avatar_url"]}" alt=""/> </li>

fetch(
	"https://api.github.com/users/davidvandenbor/repos?sort=created&direction=dsc"
)
	.then((resp) => resp.json())
	.then((resp) => {
		for (let repo of resp) {
			const { name, description, html_url } = repo;
			const repositoryList = document.querySelector(".repo--js");
			const myTemplate = `
	 <ul class="project"> 
	 <iframe src="https://codesandbox.io/embed/github/davidvandenbor/${name}?codemirror=1&fontsize=14&editorsize=30&runonclick=0" style="width:100%; height:300px; border:solid 3px black; border-radius: 4px; overflow:hidden;" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts" class="codesandbox"></iframe>

	 <li>${name}</li>
	 <li>${description} <br /></li>
	 <li>Link to Sandbox: <a href="https://githubbox.com/davidvandenbor/${name}" alt="This is a source code of ${name} project." target="_new">Source code</a></li>
    <li>Link to <a href="${html_url}" title="This is link to ${name} repository from my GitHub list" target="_new">Github Repo</a></li>
    </ul>
    `;
			repositoryList.innerHTML += myTemplate;
		}
	})
	.catch((error) => {
		console.log("error");
	});

// Search filter for flitering through the Repository examples by keywords

function zoekfilter() {
	var input, filter, repositories, td, i, txtValue, li;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	repositories = document.getElementById("repositories");
	li = repositories.querySelectorAll(".project");
	for (i = 0; i < li.length; i++) {
		console.log(li[i].parentNode);
		var rowContent = li[i].textContent;
		rowContent = rowContent.replace(/[\s]+/g, " ");
		//console.log(rowContent);

		if (rowContent) {
			if (rowContent.toUpperCase().includes(filter)) {
				li[i].style.cssText = "display: block;";
			} else {
				li[i].style.cssText = "display: none;";
			}
		}
	}
}
