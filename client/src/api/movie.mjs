function getAll() {
    return fetch('/api/v1/movies')
        .then(result => result.json())
}

function create(data){
	var xhttp = new XMLHttpRequest();
	let d = new Date();
	let hour = d.getHours
    xhttp.open("POST", "http://localhost:3000/api/v1/movies",true);
    //xhttp.setRequestHeader("Content-type","application/json");
	xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	var input = JSON.stringify({
		title: data.name,
		description: data.plot,
		year: data.year,
		runtime: data.runtime,
		country: data.country,
		language: data.language,
		genres: data.generes,
		directors: data.directors,
		writers: data.writers,
		createdAt: d,
		updatedAt: d
	})
		xhttp.send(input);
}

export default {
    getAll, create
}
