import Table from './components/table.mjs'
import movieService from './api/movie.mjs'

// Inicializamos la tabla
window.table = Table('#movies', {
    header: [
        { label: 'Título', field: 'title' },
        { label: 'Descripción', field: 'description' },
        { label: 'Año', field: 'year' },
        { label: 'Pais', field: 'country' },
        { label: 'Director', field: 'directors' },
        {
            label: 'GUIONISTAS',
            field: 'writers',
            render: function (data) { return data.join(', ') }
        }
    ],
    data: [],
    // Esta funcion se ejecuta cuando seleccionamos una pelicula
    onSelectedRow: function (row) {
        console.log(table.getSelectedRows())

        document.getElementById("addMovieBtn").disabled = true // nuevo 1
    },

    // Esta funcion se ejecuta cuando deseleccionamos una pelicula
    onDeselectedRow: function () {
        console.log(table.getSelectedRows())

        document.getElementById("addMovieBtn").disabled = false // nuevo 2


    }
})

// Obtenemos todas las peliculas
movieService.getAll().then(table.update)


// Guardamos todas las referencias a elementos que vamos a
// necesitar
const $refs = {
    cancelModalBtn: document.querySelector('#cancelModalBtn'),
    saveMovieBtn: document.querySelector('#saveMovieBtn'),
    addMovieBtn: document.querySelector('#addMovieBtn'),
    closeModalBtn: document.querySelector('#closeModalBtn'),

    modal: document.querySelector('#modal'),

    movieName: document.querySelector('#movieName'),
    moviePlot: document.querySelector('#moviePlot'),
    movieReleaseDate: document.querySelector('#movieReleaseDate'),
    movieCountry: document.querySelector('#movieCountry'),
    movieRuntime: document.querySelector('#movieRuntime'),
    movieLanguage: document.querySelector('#movieLanguage'),
    movieGeneres: document.querySelector('#movieGeneres'),
    movieWriters: document.querySelector('#movieWriters'),
    movieDirectors: document.querySelector('#movieDirectors')
}

/*
 * Abre el modal
 */
function openModal() {
    $refs.modal.classList.add('is-active')
}

/*
 * Cierra el modal
 */
function closeModal() {
    $refs.modal.classList.remove('is-active')
}

function parseCSV(val) {
    return val.split(',').flatMap(v => v.split());
}

/*
 * Guarda una pelicula
 */
function saveMovie() {
    var date = new Date($refs.movieReleaseDate.value)
    const movie = {
        title: $refs.movieName.value,
        description: $refs.moviePlot.value,
        year: date.getFullYear(),
        runtime: +$refs.movieRuntime.value,
        country: $refs.movieCountry.value,
        language: $refs.movieLanguage.value,
        genres: parseCSV($refs.movieGeneres.value),
        directors: parseCSV($refs.movieDirectors.value),
        writers: parseCSV($refs.movieWriters.value)  
    }
    
    movieService.create(movie)
    console.log(movie)
}

// Levantamos los listeners de la app
$refs.addMovieBtn.addEventListener('click', openModal)
$refs.cancelModalBtn.addEventListener('click', closeModal)
$refs.closeModalBtn.addEventListener('click', closeModal)
$refs.saveMovieBtn.addEventListener('click', saveMovie)
