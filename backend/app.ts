import express from "express";
import dotenv from "dotenv";
import Database from "./db/Database";

dotenv.config();
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Servidor corriendo 🚀")
});

app.get("/db-test", async (req, res) => {
  try {
    const db = Database.getInstance();
    const [rows] = await db.query("SELECT 1 + 1 AS result");
    res.json(rows);
  } catch (error) {
    console.error("❌ Error en la conexión:", error);
    res.status(500).json({ error: "Error en la conexión a la base de datos" });
  }
});

app.listen(3000, () => console.log('Servidor corriendo en localhost:3000 🚀'))