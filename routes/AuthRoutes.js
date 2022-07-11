import { Router } from "express";
import { check } from "express-validator";
import { login, signIn } from "../controllers/Auth.js";
import fieldValidation from "../middlewares/fieldValidation.js";

const route = Router()

route.post('/register', [
    check('name').isString('El nombre es requerido'),
    check('password').isString('La contraseña es requerida'),
    check('rpassword').isString('Repita la contraseña'),
    fieldValidation
], login)

route.post('/login', [
    check('name').isString('El nombre es requerido'),
    check('password').isString('La contraseña es requerida'),
    fieldValidation
], signIn)

export default route