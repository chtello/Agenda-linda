const app = require("./app")
const mongoose = require("mongoose");
let puerto = 3000;

mongoose
.connect("mongodb+srv://Diego:2192@cluster0.9fbrugh.mongodb.net/?retryWrites=true&w=majority")
    .then(console.log("Connected to database"))
    .catch((error)=>console.log("tienes un error, tu error es :" + error));

app.listen(puerto,()=>{
    console.log("hola mundo")
});
