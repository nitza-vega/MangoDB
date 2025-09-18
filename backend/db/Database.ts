import mysql, { Pool } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

class Database {
    private static instance: Pool;

    private constructor() { }

    public static getInstance(): Pool {
        if (!Database.instance) {
            Database.instance = mysql.createPool({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                port: Number(process.env.DB_PORT),
            });
            console.log("Nueva instancia de conexión creada 🟢");
        }
        return Database.instance;
    }
}

export default Database;