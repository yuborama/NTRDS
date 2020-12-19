const { Schema, model } = require("mongoose");
const FuncionSchema = new Schema(
  {
    numerofuncion: { type: String, required: true },
    pelicula: { type: Schema.Types.ObjectId, ref: 'Pelicula', required: true },
    sala: { type: String, required: true },
    fecha: { type: Date, required: true },
    hora: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Funcion", FuncionSchema);

numero-funcion
pelicula
fecha 
hora 
sala 
silla 