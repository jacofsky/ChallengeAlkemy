import sql from "mssql"
import { sqlConfig } from "../db/sqlConfig.js";

export const findMovieById = async(id) => {

    try {
        const pool = await sql.connect(sqlConfig);        
        const result = await pool.request()
                                    .input('id', sql.Int, id)
                                    .query("SELECT * FROM Peliculas WHERE Id=@id");
        
        return result.recordset[0]
    } catch (error) {
        console.log(error);
    }
}

export const getMovieById = async(id) => {

    try {
        const pool = await sql.connect(sqlConfig);        
        const result = await pool.request()
                                    .input('id', sql.Int, id)
                                    .query("SELECT * FROM PeliPersonaje pp INNER JOIN Peliculas p ON pp.Pelicula = p.Id INNER JOIN Personaje pe ON pp.Personaje = pe.Id WHERE p.Id = @id");
        
        return result.recordset[0]
    } catch (error) {
        console.log(error);
    }
}

export const getAllMovies = async() => {

    try {
        const pool = await sql.connect(sqlConfig);        
        const result = await pool.request()
                                    .query("SELECT * FROM PeliPersonaje pp INNER JOIN Peliculas p ON pp.Pelicula = p.Id INNER JOIN Personaje pe ON pp.Personaje = pe.Id");
        
        return result.recordset
    } catch (error) {
        console.log(error);
    }
}

export const getAllMoviesASC = async() => {

    try {
        const pool = await sql.connect(sqlConfig);        
        const result = await pool.request()
                                    .query("SELECT * FROM PeliPersonaje pp INNER JOIN Peliculas p ON pp.Pelicula = p.Id INNER JOIN Personaje pe ON pp.Personaje = pe.Id ORDER BY pp.Pelicula ASC");
        
        return result.recordset
    } catch (error) {
        console.log(error);
    }
}

export const getAllMoviesDESC = async() => {

    try {
        const pool = await sql.connect(sqlConfig);        
        const result = await pool.request()
                                    .query("SELECT * FROM PeliPersonaje pp INNER JOIN Peliculas p ON pp.Pelicula = p.Id INNER JOIN Personaje pe ON pp.Personaje = pe.Id ORDER BY pp.Pelicula DESC");
        
        return result.recordset
    } catch (error) {
        console.log(error);
    }
}

export const updateMovieById = async(id, imagen, titulo, fecha, calificacion) => {

    try {
        
        const pool = await sql.connect(sqlConfig);        
        const result = await pool.request()
                                    .input("id", sql.Int, id)
                                    .input("imagen", sql.VarChar, imagen)
                                    .input("titulo", sql.VarChar, titulo)
                                    .input("fecha", sql.Date, fecha)
                                    .input("calificacion", sql.Int, calificacion)
                                    .query("UPDATE Peliculas SET Imagen = @imagen, Titulo = @titulo, Fecha = @fecha, Calificacion = @calificacion WHERE Id = @id");
        
        return result.rowsAffected[0] === 1 ? true : false;

    } catch (error) {
        console.log(error);
    }

}

export const deleteMovieById = async(id) => {

    try {
        
        const pool = await sql.connect(sqlConfig);        
        const result = await pool.request()
                                    .input("id", sql.Int, id)
                                    .query("DELETE FROM Peliculas WHERE Id=@id");
        
        return result.rowsAffected[0] === 1 ? true : false;

    } catch (error) {
        console.log(error);
    }

}


export const createMovie = async(imagen, titulo, fecha, calificacion) => {

    try {
        
        const pool = await sql.connect(sqlConfig);        
        const result = await pool.request()
                                    .input("imagen", sql.VarChar, imagen)
                                    .input("titulo", sql.VarChar, titulo)
                                    .input("fecha", sql.Date, fecha)
                                    .input("calificacion", sql.Int, calificacion)
                                    .query("INSERT INTO Peliculas VALUES (@imagen, @titulo, @fecha, @calificacion)");
        
        return result.rowsAffected[0] === 1 ? true : false;

    } catch (error) {
        console.log(error);
    }

}