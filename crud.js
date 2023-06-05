const mongoose = require("mongoose");

const NotaSchema = mongoose.Schema({
    Titulo:{type:String,required:"Poner un titulo"},
    Fecha:{type:Number},
    Descripción:{type:String,required:"Desarroyr la nota"}
});
module.exports=mongoose.model("nota",NotaSchema);