const express = require("express");
const NotaSchema = require("../crud");
const  router = express.Router();
// crear nuevas notas
router.post("/Notas",(req,res) =>{
    const Nota = NotaSchema(req.body);
    Nota
    .save()
    .then((data)=>res.json(data),console.log("dato resivido correctamente"))
    .catch((error)=>console.log ("tu error es :"+error))
});
// leer notas
router.get("/Notas",(req,res) =>{
    NotaSchema
    .find()
    .then((data)=>res.json(data),console.log("datos leidos correctamente"))
    .catch((error)=>console.log ("tu error es :"+error))
});
//buscar notas
router.get("/Notas/:id",(req,res) =>{
    const { id } = req.params;
    NotaSchema
    .findById(id)
    .then((data)=>res.json(data),console.log("dato encontrado correctamente"))
    .catch((error)=>console.log ("tu error es :"+error))
});
//modificar notas
router.put("/Notas/:id",(req,res) =>{
    const { id } = req.params;
    const { Titulo, Fecha, Descripción } = req.body;
    NotaSchema
    .updateOne({_id : id},{$set: {Titulo, Fecha, Descripción}})
    .then((data)=>res.json(data),console.log("dato modificado correctamente"))
    .catch((error)=>console.log ("tu error es :"+error))
});
//eliminar notas
router.delete("/Notas/:id",(req,res) =>{
    const { id } = req.params;
    NotaSchema
    .remove({_id: id})
    .then((data)=>res.json(data),console.log("dato elimindo correctamente"))
    .catch((error)=>console.log ("tu error es :"+error))
});
module.exports = router;