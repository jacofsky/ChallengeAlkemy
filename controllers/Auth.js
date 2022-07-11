import { request, response } from "express";
import { createUser, findUser, signInUser } from "../services/AuthServices.js";
import { generateJWT } from "../utils/token.js";

export const login = async(req = request, res = response ) => {

    try {

        if (req.body.password != req.body.rpassword) {
           return res.status(409).json({msg: `Las contraseñas no son iguales`})
            
        }
        
        const isValidName = await findUser(req.body.name)

        if (!isValidName) {
            return res.status(409).json({msg: `El nombre: ${req.body.name} se encuentra ocupado`})
            
        }

    
        const user = await createUser(req.body.name, req.body.password)
        
        if (user) {
            return res.status(203).json({msg: `Usuario creado`})
            
        } else {
            return res.status(501).json({msg: `Ups! Parece que algo no funciono`})
            
        }
    
    } catch (error) {
        return res.status(503).json({msg: `Server error`})
        
    }
}

export const signIn = async(req = request, res = response ) => {

    try {

        
        const vsignIn = await signInUser(req.body.name, req.body.password)

        
                
        if (vsignIn) {
            const token = await generateJWT()
            return res.status(200).json({msg: `Usuario authenticado`, token: token})
            
        } else {
            return res.status(501).json({msg: `Usuario no encontrado`})
            
        }
    
    } catch (error) {
        console.log(error);
        return res.status(503).json({msg: `Server error`})
        
    }
}
