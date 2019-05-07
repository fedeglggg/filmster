function getAll() {
    return fetch('/api/v1/movies')
        .then(result => result.json())
}




function create(data){
  return fetch('/api/v1/movies', {
      method: 'POST', 
      body: data, 
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}


export default {
    getAll,create
}
