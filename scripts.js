// Example of a nested JSON call to fetch data through the Github API:
// <li> <img src="${owner["avatar_url"]}" alt=""/> </li>

fetch(
	"https://api.github.com/users/davidvandenbor/repos?sort=created&direction=dsc"
)
	.then((resp) => resp.json())
	.then((resp) => {
		for (let repo of resp) {
			const { name, description, html_url, topics } = repo;
			const repositoryList = document.querySelector(".repo--js");
			const myTemplate = `
	 <ul class="project" id="${name}"> 
	 <iframe src="https://htmlpreview.github.io/?https://github.com/davidvandenbor/${name}/blob/master/index.html"></iframe>
	 <li><a href="${html_url}" title="This is link to ${name} repository from my GitHub list" target="_new">${name}</a></li>
	 <li>${description} <br /></li>
	 <li>CMD Coursenaam: <span style="text-transform:uppercase;font-weight:normal">${topics}</span> <br /></li>
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
