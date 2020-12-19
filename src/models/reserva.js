const { Schema, model } = require("mongoose");
const ReservaSchema = new Schema(
  {
    cliente: { type: Schema.Types.ObjectId, ref: "Cliente", required: true },
    pelicula: { type: Schema.Types.ObjectId, ref: "Pelicula", required: true },
    funcion: { type: Schema.Types.ObjectId, ref: "Funcion", required: true },
    silas: [{ type: String, required: true }],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Reserva", ReservaSchema);