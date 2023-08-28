// Imports
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");



require("dotenv").config();

const { sequelize } = require("./database/db");
//require('./database/asociations');

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,"public")))
app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(morgan("dev"));


//setting
const PORT = process.env.PORT || 3100;

//static files
 app.use(express.static(path.join(__dirname,"public")))


//app.use("/address",require('./router/address_ruta')); 
app.use("/",require('./router/post_ruta')); 
app.use("/user",require('./router/user_ruta')); 


//arrancampos el servidor
app.listen(PORT, function (req, res) {
  console.log("la app esta escuchando en http://localhost: " + PORT);
});

//conexion a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log("nos hemos conectado a la base de datos");
  })
  .catch((error) => {
    console.log("se ha producido un error", error);
  });