import express from "express";
import rutas from "./routes/rutas.js";
import conectarBD from "./bd/bd.js"; // Asumiendo que esta función solo intenta la conexión

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/", rutas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Servidor Express escuchando en el puerto: " + PORT);

  conectarBD(); 
});


