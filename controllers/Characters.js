import { request, response } from "express";
import { createCharacter, deleteCharacterById, getCharactersByEdad, getCharactersById, getCharactersByMovieTitle, getCharactersByName, updateCharacterById } from "../services/CharactersServices";
import { findMovieById } from "../services/MovieServices";

export const getCharacters = async(req = request, res = response) => {
    

    if (req.query.nombre) {
        const nombre = req.query.nombre

        const data = await getCharactersByName(nombre)
        
        return res.status(200).json({
            data
        })
    }

    if (req.query.edad) {
        const edad = req.query.edad

        const data = await getCharactersByEdad(edad)

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

    const data = await getCharacters()

    return res.status(200).json({
        data
    })

}

export const getCharactersId = async(req = request, res = response) => {

    const {id} = req.params

    const data = await getCharactersById(id)

    return res.status(200).json({
        data
    })

}

export const updateCharacter = async(req = request, res = response) => {

    const {imagen, nombre, edad, peso, historia} = req.body
    const {id} = req.params

    const isUpdated = await updateCharacterById(id, imagen, nombre, edad, peso, historia)

    if (!isUpdated) {
        return res.status(400).json({
            msg: 'Personaje no encontrado'
        })
    }

    res.status(203).json({
        msg: 'Personaje actualizado'
    })

}

export const deleteCharacter = async(req = request, res = response) => {

    const {id} = req.params

    const isDeleted = await deleteCharacterById(id)

    if (!isDeleted) {
        return res.status(400).json({
            msg: 'Personaje no encontrado'
        })
    }

    res.status(203).json({
        msg: 'Personaje eliminado'
    })
}

export const postCharacter = async(req = request, res = response) => {

    const {imagen, nombre, edad, peso, historia, idPelicula} = req.body

    const peliculaValida = await findMovieById(idPelicula)

    if (!peliculaValida) {
        return res.status(400).json({
            msg: 'Pelicula no encontrada'
        })
    }

    const isCreated = await createCharacter(imagen, nombre, edad, peso, historia, idPelicula)

    if (!isCreated) {
        return res.status(400).json({
            msg: 'Personaje no creado'
        })
    }

    res.status(203).json({
        msg: 'Personaje creado'
    })
}