const express = require("express");
const morgan = require("morgan");
const database = require("./database");
const cors = require("cors");

//configuracion inicial 
const app = express();
app.set("port",4000);
app.listen(app.get("port"));
console.log("Escuchando comunicaciones al puerto "+app.get("port"));

//middlewares
app.use(morgan("dev"));
app.use(cors({
    origin: ["http://127.0.0.1:5500"]
}))
//rutas
app.get("/productos", async (req,res) => {
    const connection = await database.getConnection();
    const result = await connection.query("SELECT * from producto");
    res.json(result)
    //console.log(result)
})


