function getAll() {
    return fetch('/api/v1/movies')
        .then(result => result.json())
}




function create(data){
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/api/v1/movies",true);
  xhttp.setRequestHeader("Content-Type","application/json ; charset=UTF-8");
  var input = JSON.stringify(data);
  xhttp.send(input)
}
 


export default {
    getAll,create
}
