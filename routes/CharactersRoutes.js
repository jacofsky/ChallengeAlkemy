import { Router } from "express";
import { check } from "express-validator";
import { deleteCharacter, getCharactersId, postCharacter, getCharacters, updateCharacter } from "../controllers/Characters.js";
import fieldValidation from "../middlewares/fieldValidation.js";
import tokenValidation from "../middlewares/tokenValidation.js";

const route = Router()

route.get('/', getCharacters)

route.get('/:id', [
    check('id', 'El id no es valido').isNumeric(),
    fieldValidation
], getCharactersId)


route.put('/:id', [
    tokenValidation,
    check('id', 'El id no es valido').isNumeric(),
    check('imagen', 'Es necesaria una imagen').isString(),
    check('nombre', 'Es necesario un nombre').isString(),
    check('edad', 'Es necesaria una edad').isNumeric(),
    check('peso', 'Es necesario una peso').isNumeric(),
    check('historia', 'Es necesaria una historia').isString(),
    fieldValidation
], updateCharacter)

route.delete('/:id', [
    tokenValidation,
    check('id', 'El id no es valido').isNumeric(),
    fieldValidation
], deleteCharacter)

route.post('/', [
    tokenValidation,
    check('imagen', 'Es necesaria una imagen').isString(),
    check('nombre', 'Es necesario un nombre').isString(),
    check('edad', 'Es necesaria una edad').isNumeric(),
    check('peso', 'Es necesario una peso').isNumeric(),
    check('historia', 'Es necesaria una historia').isString(),
    check('idPelicula', 'Es necesario un id pelicula').isNumeric(),
    fieldValidation
], postCharacter)

export default route