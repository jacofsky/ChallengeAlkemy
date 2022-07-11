import jwt from "jsonwebtoken";
import 'dotenv/config'


export const generateJWT = () => {

    
    return new Promise((resolve, reject) => {

        const payload = {valid: true}
        
        jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn: '1h'}, (err, token) => {
            
            if (err) {
                console.log(err)
                reject('Failed to generate token')
            } else {
                resolve(token)
            }
        
        })

    })
}