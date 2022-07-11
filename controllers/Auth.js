import { request, response } from "express";
import { createUser, findUser, signInUser } from "../services/AuthServices.js";
import { generateJWT } from "../utils/token.js";

export const login = async (req = request, res = response) => {

    try {
        let resSend = {};
        if (req.body.password != req.body.rpassword) {
            resSend = res.status(409).json({ msg: `Las contraseñas no son iguales` })
        }

        const isValidName = await findUser(req.body.name)

        if (!isValidName) {
            resSend = res.status(409).json({ msg: `El nombre: ${req.body.name} se encuentra ocupado` })

        }


        const user = await createUser(req.body.name, req.body.password)

        if (user) {
            resSend = res.status(203).json({ msg: `Usuario creado` })

        } else {
            resSend = res.status(501).json({ msg: `Ups! Parece que algo no funciono` })

        }
        return resSend

    } catch (error) {
        return res.status(503).json({ msg: `Server error` })

    }
}

export const signIn = async (req = request, res = response) => {

    try {
        let resSend = {};

        console.log(req.body.name, req.body.password);
        const vsignIn = await signInUser(req.body.name, req.body.password)


        if (vsignIn) {
            const token = await generateJWT()
            resSend = res.status(200).json({ msg: `Usuario authenticado`, token: token })
        } else {
            resSend = res.status(501).json({ msg: `Usuario no encontrado` })
        }
        return resSend

    } catch (error) {
        console.log(error);
        return res.status(503).json({ msg: `Server error` })

    }
}
