import { request, response } from "express";
import jwt from "jsonwebtoken";


const tokenValidation = (req = request, res =  response, next) => {

    const token = res.header('x-token')

    if (!token) {
        return res.status(400).json({
            msg: 'El token es obligatorio'
        })
    }

    try {
        const {valid} = jwt.verify(token, process.env.JWT_SECRET_KEY)

        if (!valid) {
            return res.status(401).json({
                msg: 'Token invalido'
            })
        }
    } catch (error) {
        return res.status(401).json({
            msg: 'Token invalido'
        })
    }
    

    next()
}

export default tokenValidation