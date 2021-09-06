
//Declaracion de variables
const { urlencoded } = require("express");
const express = require("express")
const app = express();

const morgan = require("morgan")

const port = 3000;

//Plantillas
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(__dirname + "/views"));
//
 //Rutas
app.use("/", require("./router/index.js"))
app.use("/signup", require("./router/signup.js"))
app.use("/variables", require("./router/variables.js"))
app.use("/about", require("./router/about.js"))
app.use("/operadores", require("./router/operadores.js"))
app.use("/condicionales", require("./router/condicionales.js"))
app.use("/arrays", require("./router/arrays.js"))
app.use("/nivelmedio", require("./router/nivelmedio.js"))
app.get("*", function(req, res) {
    res.status(404).render("404.ejs")
    })
//
//Listener
    app.listen(port, () => {
    console.log(`Servidor corriend en el puerto ${port}`)
})
//