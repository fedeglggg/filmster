import Table from './components/table.mjs'
import movieService from './api/movie.mjs'

const table = Table('#movies', {
    header: [
        { label: 'Título', field: 'title' },
        { label: 'Descripción', field: 'description' },
        { label: 'Año', field: 'year' },
        { label: 'Pais', field: 'country' },
<<<<<<< HEAD
        
=======
        { label: 'Director', field: 'directors' },
>>>>>>> 542b4578cc0368f05cbc25c596a820150601b7dd
        {
            label: 'Guionistas',
            field: 'writers',
            render: function (data) { return data.join(', ') }
        }
    ],
    data: [],
    onSelectedRow: function (row) {
        console.log(table.getSelectedRows())
    },
    onDeselectedRow: function () {
        console.log(table.getSelectedRows())
    }
})

movieService.getAll().then(table.update)


