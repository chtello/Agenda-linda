const express = require("express");
const app = require("./app");
const mongoose = require("mongoose");
const ruta = require ("./rutas/RutNot");
let puerto = 3000;

//middleware
app.use(express.json());
app.use("/api",ruta);

mongoose
.connect("mongodb+srv://Diego:2192@cluster0.9fbrugh.mongodb.net/?retryWrites=true&w=majority")
    .then(console.log("Connected to database"))
    .catch((error)=>console.log("tienes un error, tu error es :" + error));

app.listen(puerto,()=>{
    console.log("hola mundo")
});
