const startServer = require('../../server/src/index.js')
const fetch = require('node-fetch');

let server, baseURL;

beforeAll(async () => {
    server = await startServer();
    baseURL = `http://localhost:${server.address().port}/api/v1`
})

afterAll(() => {
    server.close()
})

test('Se debería iniciar la aplicación sin películas', async () => {
    const URL = `${baseURL}/movies`;
    const req = await fetch(URL)
    const movies = await req.json()

    expect(movies.length).toBe(0)
});

//Test2 Sol

test('Crear nueva pelicula y verificar que aparezca en la base de datos', async () => { 

	// post movie
    const movie = {
        title: 'Orgullo y Prejuicio',
        description: 'Las cinco hermanas Bennet han sido criadas por una madre obsesionada por encontrarles marido. Pero una de ellas, Lizzie, inteligente y con carácter, desea una vida con perspectivas más abiertas, un anhelo respaldado por su padre. Cuando el señor Bingley (Simon Woods), un soltero rico, y su círculo de sofisticados amigos se instalan en una mansión vecina para pasar el verano, las Bennett se entusiasman con la posibilidad de encontrar pretendientes. En el baile de bienvenida, Lizzie conoce al apuesto y elegante señor Darcy (Matthew Macfadyen), pero, a primera vista, le parece demasiado orgulloso y arrogante',
        year: 2005,
        runtime: 129,
        country: 'Inglaterra',
        language: 'English',
        genres: 'Romance',
        directors: 'Joe Wright',
        writers: 'Jane Austen',
    }

    await fetch(`${baseURL}/movies`, {
        method: 'POST',
        body: JSON.stringify(movie),
        headers:{
            'Content-Type': 'application/json'
        }
    })

   	//get movie
    const req = await fetch(`${baseURL}/movies/1`)
    const recivedMovie = await req.json()
 
    expect(movie.title).toBe(recivedMovie.title)
    expect(movie.description).toBe(recivedMovie.description)
    expect(movie.year).toBe(recivedMovie.year)
    expect(movie.runtime).toBe(recivedMovie.runtime)
    expect(movie.country).toBe(recivedMovie.country)
    expect(movie.language).toBe(recivedMovie.language)
    expect(movie.genres).toBe(recivedMovie.genres)
    expect(movie.directors).toBe(recivedMovie.directors)
    expect(movie.writers).toBe(recivedMovie.writers)
     
});



