const { Schema, model } = require("mongoose");
const PeliculaSchema = new Schema(
  {
    titulo: { type: String, required: true },
    genero: { type: String, required: true },
    clasificacionF: { type: String, required: true },
    formato: { type: String, required: true },
    imagen_logo: { type: String, required: true },
    imagen_portada: { type: String, required: true },
    imagen_background: { type: String, required: true },
    resumen: { type: String, required: true },
    protagonistas: [{ type: String, required: true }],
    director: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Pelicula", PeliculaSchema);
