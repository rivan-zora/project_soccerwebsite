var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
var leagues;

xhr.addEventListener("readystatechange", function () { //to pick up the api for leagues
	if (this.readyState === this.DONE) {
//		console.log(this.responseText);
	leagues = JSON.parse(this.responseText); // To convert it an object
	manipulateData(leagues); // Call function and do necessary actions
	}
});

xhr.open("GET", "https://api-football-beta.p.rapidapi.com/leagues?id=39");
xhr.setRequestHeader("x-rapidapi-host", "api-football-beta.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "e33ca56577mshfe9a310d63946cep1bb95ajsn60a19dcb8a4e");

xhr.send(data);


function manipulateData(leagues){
//	var img = document.createElement('img');
//	img.src = leagues.response[0].league.logo;
//	document.getElementById('main').appendChild(img);

//	console.log(leagues.response[0].league.logo);
//	var container = document.querySelector('#main');
//	console.log(container);
}




