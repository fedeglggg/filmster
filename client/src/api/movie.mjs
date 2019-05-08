function getAll() {
    return fetch('/api/v1/movies')
        .then(result => result.json())
}




/*function create(data){
	console.log("aca viene la data")
	console.log(data)
   	fetch('/api/v1/movies', {
      method: 'POST', 
      body: JSON.stringify(data), 
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
	.catch(error => console.error('Error:', error))
	.then(response => console.log('Success:', response));
}*/
/*
function create(data){
	return fetch('http://localhost:3000/api/v1/movies', {
	  method: 'POST', // or 'PUT'
	  body: JSON.stringify(data), // data can be `string` or {object}!
	  headers:{
	    'Content-Type': 'application/json'
	  }})
	.then(res => console.log(res))
	.catch(error => console.error('Error:', error));
}*/

/*Executing (default): CREATE TABLE IF NOT EXISTS `Movie` (`id` INTEGER PRIMARY KEY
 AUTOINCREMENT, `title` VARCHAR(255) NOT NULL, `description` VARCHAR(255), `year`
  INTEGER NOT NULL, `runtime` INTEGER NOT NULL, `country` VARCHAR(255) NOT NULL, 
  `language` VARCHAR(255) NOT NULL, `genres` JSON, `directors` JSON, `writers` JSON, 
  `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
Executing (default): PRAGMA INDEX_LIST(`Movie`)
POST /api/v1/movies 500 17.154 ms - 24


title = data.name
description = data.plot
year = data.year
runtime = data.runtime
country = data.country
language = data.language
genres = data.generes
directors = data.directors
writers = datawriters

plot: $refs.moviePlot.value,
        year: new Date($refs.movieReleaseDate.value),
        country: $refs.movieCountry.value,
        runtime: +$refs.movieRuntime.value,
        language: $refs.movieLanguage.value,
        generes: parseCSV($refs.movieGeneres.value),
        writers: parseCSV($refs.movieWriters.value),
        directors: parseCSV($refs.movieDirectors.value)
    }
*/


function create(data){
	var xhttp = new XMLHttpRequest();
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
		genre:  data.generes,
		directors: data.directors,
		writers: data.writers,
	})
	    xhttp.send(input);
}

export default {
    getAll, create
}
