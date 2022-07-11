import sql from "mssql"
import { sqlConfig } from "../db/sqlConfig.js";

export const getCharacters = async() => {

    try {
        const pool = await sql.connect(sqlConfig);        
        const result = await pool.request()
                                    .query("SELECT * FROM PeliPersonaje pp INNER JOIN Peliculas p ON pp.Pelicula = p.Id INNER JOIN Personaje pe ON pp.Personaje = pe.Id");
        
        return result.recordset
    } catch (error) {
        console.log(error);
    }
}

export const getCharactersById = async(id) => {

    try {
        const pool = await sql.connect(sqlConfig);        
        const result = await pool.request()
                                    .input('id', sql.Int, id)
                                    .query("SELECT * FROM Personaje WHERE Id=@id");
        
        return result.recordset[0]
    } catch (error) {
        console.log(error);
    }
}

export const getCharactersByName = async(name) => {

    try {
        const pool = await sql.connect(sqlConfig);        
        const result = await pool.request()
                                    .input("name", sql.VarChar, name)
                                    .query("SELECT * FROM PeliPersonaje pp INNER JOIN Peliculas p ON pp.Pelicula = p.Id INNER JOIN Personaje pe ON pp.Personaje = pe.Id WHERE pe.Nombre = @name");
        
        return result.recordset
    } catch (error) {
        console.log(error);
    }
}

export const getCharactersByEdad = async(edad) => {

    try {
        const pool = await sql.connect(sqlConfig);        
        const result = await pool.request()
                                    .input("edad", sql.Int, edad)
                                    .query("SELECT * FROM PeliPersonaje pp INNER JOIN Peliculas p ON pp.Pelicula = p.Id INNER JOIN Personaje pe ON pp.Personaje = pe.Id WHERE pe.Edad = @edad");
        
        return result.recordset
    } catch (error) {
        console.log(error);
    }
}

export const getCharactersByMovieTitle = async() => {

    try {
        const pool = await sql.connect(sqlConfig);        
        const result = await pool.request()
                                    .input("title", sql.VarChar, title)
                                    .query("SELECT * FROM PeliPersonaje pp INNER JOIN Peliculas p ON pp.Pelicula = p.Id INNER JOIN Personaje pe ON pp.Personaje = pe.Id WHERE p.Titulo = @title");
        
        return result.recordset
    } catch (error) {
        console.log(error);
    }
}

export const updateCharacterById = async(id, imagen, nombre, edad, peso, historia) => {

    try {
        
        const pool = await sql.connect(sqlConfig);        
        const result = await pool.request()
                                    .input("id", sql.Int, id)
                                    .input("imagen", sql.VarChar, imagen)
                                    .input("nombre", sql.VarChar, nombre)
                                    .input("edad", sql.Int, edad)
                                    .input("peso", sql.Int, peso)
                                    .input("historia", sql.VarChar, historia)
                                    .query("UPDATE Personaje SET Imagen = @imagen, Nombre = @nombre, Edad = @edad, Peso = @peso, Historia = @historia WHERE Id = @id");
        
        return result.rowsAffected[0] === 1 ? true : false;

    } catch (error) {
        console.log(error);
    }

}

export const deleteCharacterById = async(id) => {

    try {
        
        const pool = await sql.connect(sqlConfig);        
        const result = await pool.request()
                                    .input("id", sql.Int, id)
                                    .query("DELETE FROM Personajes WHERE Id=@id");
        
        return result.rowsAffected[0] === 1 ? true : false;

    } catch (error) {
        console.log(error);
    }

}

export const createCharacter = async(imagen, nombre, edad, peso, historia, idPelicula) => {

    try {
        
        const pool = await sql.connect(sqlConfig);        
        const result = await pool.request()
                                    .input("imagen", sql.VarChar, imagen)
                                    .input("nombre", sql.VarChar, nombre)
                                    .input("edad", sql.Int, edad)
                                    .input("peso", sql.Int, peso)
                                    .input("historia", sql.VarChar, historia)
                                    .input("idPelicula", sql.VarChar, idPelicula)
                                    .query("INSERT INTO Personaje VALUES (@imagen, @nombre, @edad, @peso, @historia) INSERT INTO PeliPersonaje VALUES (@idPelicula, @@IDENTITY)");
        
        return result.rowsAffected[0] === 2 ? true : false;

    } catch (error) {
        console.log(error);
    }

}