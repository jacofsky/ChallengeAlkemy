import { request, response } from "express";
import { validationResult } from "express-validator"

const fieldValidation = (req = request, res =  response, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        res.status(400).json({
            errors: errors.mapped()
        })
    }

    next()
}

export default fieldValidation