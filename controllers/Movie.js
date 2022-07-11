import { getCharactersByMovieTitle } from "../services/CharactersServices.js"
import { createMovie, deleteMovieById, findMovieById, getAllMovies, getAllMoviesASC, getAllMoviesDESC, getMovieById, updateMovieById } from "../services/MovieServices.js"

export const getMovies = async(req = request, res = response) => {
    

    if ('asc' = req.query.orden) {

        const data = await getAllMoviesASC()
        
        return res.status(200).json({
            data
        })
    }

    if ('desc' = req.query.orden) {

        const data = await getAllMoviesDESC()

        return res.status(200).json({
            data
        })
    }

    if (req.query.movietitle) {
        const movietitle = req.query.movietitle

        const data = await getCharactersByMovieTitle(movietitle)

        return res.status(200).json({
            data
        })
    }

    const data = await getAllMovies()

    return res.status(200).json({
        data
    })

}

export const getMoviesId = async(req = request, res = response) => {

    const {id} = req.params

    const data = await getMovieById(id)

    return res.status(200).json({
        data
    })

}

export const updatePelicula = async(req = request, res = response) => {

    const {imagen, titulo, fecha, calificacion} = req.body
    const {id} = req.params

    const isUpdated = await updateMovieById(id, imagen, titulo, fecha, calificacion)

    if (!isUpdated) {
        return res.status(400).json({
            msg: 'Pelicula no encontrada'
        })
    }

    res.status(203).json({
        msg: 'Pelicula actualizada'
    })

}

export const deleteMovie = async(req = request, res = response) => {

    const {id} = req.params

    const isDeleted = await deleteMovieById(id)

    if (!isDeleted) {
        return res.status(400).json({
            msg: 'Pelicula no encontrada'
        })
    }

    res.status(203).json({
        msg: 'Pelicula eliminada'
    })
}

export const postMovie = async(req = request, res = response) => {

    const {imagen, titulo, fecha, calificacion} = req.body

    const isCreated = await createMovie(imagen, titulo, fecha, calificacion)

    if (!isCreated) {
        return res.status(400).json({
            msg: 'Pelicula no creada'
        })
    }

    res.status(203).json({
        msg: 'Personaje creada'
    })
}