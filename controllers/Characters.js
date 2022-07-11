import { request, response } from "express";
import { createCharacter, deleteCharacterById, getCharactersByEdad, getCharactersById, getCharactersByMovieTitle, getCharactersByName, updateCharacterById, getCharactersInService } from "../services/CharactersServices.js";
import { findMovieById } from "../services/MovieServices.js";

export const getCharacters = async (req = request, res = response) => {
    try {
        if (Object.keys(req.query).length > 0) {
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
        } else {
            const data = await getCharactersInService()
            return res.status(200).json({
                data
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const getCharactersId = async (req = request, res = response) => {

    const { id } = req.params

    const data = await getCharactersById(id)

    return res.status(200).json({
        data
    })

}

export const updateCharacter = async (req = request, res = response) => {

    const { imagen, nombre, edad, peso, historia } = req.body
    const { id } = req.params
    console.log(id, imagen, nombre, edad, peso, historia);

    const isUpdated = await updateCharacterById(id, imagen, nombre, edad, peso, historia)

    if (!isUpdated) {
        return res.status(400).json({
            msg: 'Personaje no encontrado'
        })
    }

    res.status(200).json({
        msg: 'Personaje actualizado'
    })

}

export const deleteCharacter = async (req = request, res = response) => {

    const { id } = req.params

    const isDeleted = await deleteCharacterById(id)

    if (!isDeleted) {
        return res.status(400).json({
            msg: 'Personaje no encontrado'
        })
    }

    res.status(200).json({
        msg: 'Personaje eliminado'
    })
}

export const postCharacter = async (req = request, res = response) => {

    const { imagen, nombre, edad, peso, historia, idPelicula } = req.body

    const peliculaValida = await findMovieById(idPelicula)

    let resSend

    if (!peliculaValida) {
        resSend = res.status(400).json({
            msg: 'Pelicula no encontrada'
        })
    }

    const isCreated = await createCharacter(imagen, nombre, edad, peso, historia, idPelicula)

    if (!isCreated) {
        resSend = res.status(400).json({
            msg: 'Personaje no creado'
        })
    } else {
        resSend = res.status(201).json({
            msg: 'Personaje creado'
        })
    }
    return resSend
}