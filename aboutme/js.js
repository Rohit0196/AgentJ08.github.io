var githubrequest = new XMLHttpRequest();
var githubusername = "AgentJ08";

githubrequest.open('GET', 'https://api.github.com/users/' + githubusername);
githubrequest.onload = function() {
    var githubdata = JSON.parse(githubrequest.responseText);
    document.getElementById("github").innerHTML = `
		<div class="row">
			<div class="col-3">
				<img class="img-fluid" src="${ githubdata.avatar_url }" />
			</div>
			<div class="col-9">
				<h3 class="data-title">${ githubdata.name }</h3>
				<p class="data-text">Bio : ${ githubdata.bio }</p>
				<p class="data-text">Blog : ${ githubdata.blog }</p>
				<div style="margin-top: 16px">
					<div class="data-badge">Repositories ${ githubdata.public_repos }</div>
					<div class="data-badge">Followers ${ githubdata.followers }</div>
					<div class="data-badge">Following ${ githubdata.following }</div>
				</div>
				<div>
					<button class="btn" onClick="window.open('${ githubdata.html_url }');">View ${ githubdata.name }'s profile</button>
				</div>
			</div>
		</div>
	`;
}

githubrequest.send();
