import { Router } from "express";
import { check } from "express-validator";
import { deleteMovie, getMovies, getMoviesId, postMovie, updatePelicula } from "../controllers/Movie.js";
import fieldValidation from "../middlewares/fieldValidation.js";
import tokenValidation from "../middlewares/tokenValidation.js";

const route = Router()

route.get('/', getMovies)

route.get('/:id', [
    check('id', 'El id no es valido').isNumeric(),
    fieldValidation
], getMoviesId)


route.put('/:id', [
    tokenValidation,
    check('id', 'El id no es valido').isNumeric(),
    check('imagen', 'Es necesaria una imagen').isString(),
    check('titulo', 'Es necesario un nombre').isString(),
    check('fecha', 'Es necesaria una fecha').isString(),
    check('calificacion', 'Es necesaria una calificacion').isNumeric(),
    fieldValidation
], updatePelicula)

route.delete('/:id', [
    tokenValidation,
    check('id', 'El id no es valido').isNumeric(),
    fieldValidation
], deleteMovie)

route.post('/', [
    tokenValidation,
    check('imagen', 'Es necesaria una imagen').isString(),
    check('titulo', 'Es necesario un titulo').isString(),
    check('fecha', 'Es necesaria una fecha').isString(),
    check('calificacion', 'Es necesaria una calificacion').isNumeric(),
    fieldValidation
], postMovie)

export default route