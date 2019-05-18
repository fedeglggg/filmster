const MovieModels = require('../../server/src/models/movie.js')

beforeEach(async () => {
    await MovieModels.Movie.sync({ force: true });
})

test('Crear película', async () => {
    const movieData = {
        title: 'Back to the Future',
        description: 'Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.',
        year: 1985,
        runtime: 116,
        country: 'United States',
        language: 'English',
        genres: ['Adventure', 'Comedy', 'Science Fiction'],
        directors: ['Robert Zemeckis'],
        writers: ['Robert Zemeckis', 'Bob Gale']
    };

    // Creamos la pelicula
    const movie = await MovieModels.create(movieData)

    expect(movie.title).toBe(movieData.title);
    expect(movie.description).toBe(movieData.description);
    expect(movie.year).toBe(movieData.year);

    // Completar test
})

test('Crear película sin título', async () => {
    const movieData = {
        description: 'Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.',
        year: 1985,
        runtime: 116,
        country: 'United States',
        language: 'English',
        genres: ['Adventure', 'Comedy', 'Science Fiction'],
        directors: ['Robert Zemeckis'],
        writers: ['Robert Zemeckis', 'Bob Gale']
    };

    try {
        await MovieModels.create(movieData)
    } catch (e) {
        expect(e.name).toBe('SequelizeValidationError')
    }
})

test('Obtener película', async () => {
    const movieData = {
        title: 'Back to the Future',
        description: 'Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.',
        year: 1985,
        runtime: 116,
        country: 'United States',
        language: 'English',
        genres: ['Adventure', 'Comedy', 'Science Fiction'],
        directors: ['Robert Zemeckis'],
        writers: ['Robert Zemeckis', 'Bob Gale']
    };

    // Creamos la pelicula
    const movie = await MovieModels.create(movieData)
    const recivedMovie = await MovieModels.get(movie.id);

    expect(movie.id).toBe(recivedMovie.id);
    expect(movie.title).toBe(recivedMovie.title);
    expect(movie.year).toBe(recivedMovie.year);

    // Completar test
});

test('Modelo que permite obtener todas las películas', async () => {
    const movieData = {
        title: 'Jurassic Park',
        description: 'During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.',
        year: 1993,
        runtime: 127,
        country: 'United States',
        language: 'English',
        genres: ['Adventure', 'Sci-Fi', 'Thriller'],
        directors: ['Steven Spielberg'],
        writers: ['Michael Crichton', 'Michael Crichton', 'David Koepp']
    };


    const movie = await MovieModels.create(movieData)
    const recivedMovies = await MovieModels.getAll()

    expect(recivedMovies[0].title).toEqual(movieData.title)
    expect(recivedMovies[0].description).toEqual(movieData.description)
    expect(recivedMovies[0].genres).toEqual(movieData.genres)
    expect(recivedMovies[0].directors).toEqual(movieData.directors)
    expect(recivedMovies[0].writers).toEqual(movieData.writers)
    expect(recivedMovies[0].runtime).toEqual(movieData.runtime)
    expect(recivedMovies[0].year).toEqual(movieData.year)
    expect(recivedMovies[0].language).toEqual(movieData.language)
    expect(recivedMovies[0].country).toEqual(movieData.country)
      
});


