function getAll() {
    return fetch('/api/v1/movies')
        .then(result => result.json())
}




function create(data){
<<<<<<< HEAD
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/api/v1/movies",true);
  xhttp.setRequestHeader("Content-Type","application/json ; charset=UTF-8");
  var input = JSON.stringify(data);
  xhttp.send(input)
}
 
=======
  return fetch('/api/v1/movies', {
      method: 'POST', 
      body:JSON.stringify(data) , 
      headers:{
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
>>>>>>> feature/#2



//fetch('/api/v1/movies', {
  //method: 'POST',
  //headers: {
  //  'Content-type': 'application/json; charset=UTF-8'
  //},
  //body: data
//})

//.then(function (data) {
 // console.log('Request succeeded with JSON response', data);
//})
//.catch(function (error) {
 // console.log('Request failed', error);
//});

}

export default {
    getAll,create
}
