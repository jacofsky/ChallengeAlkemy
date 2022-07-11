import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import AuthRoutes from '../routes/AuthRoutes.js'
import CharactersRoutes from '../routes/CharactersRoutes.js'
import MoviesRoutes from '../routes/MoviesRoutes.js'


 
class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        
        this.paths = {
            auth: '/auth',
            characters: '/characters',
            movies: '/movies',

        }
        
        this.middlewares()
        this.routes()
    }
 
    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
    }
 
    routes() {
        this.app.use(this.paths.auth, AuthRoutes)
        this.app.use(this.paths.characters, CharactersRoutes)
        this.app.use(this.paths.movies, MoviesRoutes)
    }
 
    listen() {
        this.app.listen(this.port, () => console.log(`Server on: ${this.port} PORT`))
    }
}
 
export default Server