//Importar o mongoose
const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

//Criando dados do objeto
const ProductSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


ProductSchema.plugin(mongoosePaginate);

//Registra um model na aplicacao, possui as propriedades do objeto ProductSchema
mongoose.model("Product", ProductSchema);

