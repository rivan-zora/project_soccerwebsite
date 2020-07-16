var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
//		console.log(this.responseText);
		var playersscores = JSON.parse(this.responseText);
		console.log(playersscores);
	}
});

xhr.open("GET", "https://api-football-beta.p.rapidapi.com/players/topscorers?season=2019&league=39");
xhr.setRequestHeader("x-rapidapi-host", "api-football-beta.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "e33ca56577mshfe9a310d63946cep1bb95ajsn60a19dcb8a4e");

xhr.send(data);
