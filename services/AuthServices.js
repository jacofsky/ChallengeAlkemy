import sql from "mssql"
import { sqlConfig } from "../db/sqlConfig.js";

export const createUser = async (name, password) => {

    try {
        console.log(sqlConfig);
        const pool = await sql.connect(sqlConfig);

        const result = await pool.request()
            .input('name', sql.VarChar, name)
            .input('password', sql.VarChar, password)
            .query("INSERT INTO Users (name, password) Values(@name, @password)");
        return result.rowsAffected[0] > 0 ? true : false;
    } catch (error) {
        console.log(error);
    }
}

export const findUser = async (user) => {

    try {
        const pool = await sql.connect(sqlConfig);
        const result = await pool.request()
            .input("user", sql.VarChar, user)
            .query("SELECT * FROM Users WHERE name=@user");

        console.log(result.rowsAffected[0]);

        return result.rowsAffected[0] === 0 ? true : false;
    } catch (error) {
        console.log(error);
    }
}

export const signInUser = async (name, password) => {

    try {
        const pool = await sql.connect(sqlConfig);
        const result = await pool.request()
            .input("name", sql.VarChar, name)
            .input("password", sql.VarChar, password)
            .query("SELECT * FROM Users WHERE name=@name AND password=@password");
        console.log(result.recordset);
        return result.recordset.length > 0 ? true : false;
    } catch (error) {
        console.log(error);
    }
}