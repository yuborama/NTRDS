const { Schema, model } = require("mongoose");
const ClienteSchema = new Schema(
  {
    cedula: { type: String, required: true },
    nombre: { type: String, required: true },
    telefono: { type: String, required: true },
    email: { type: String, required: true },
  },
{
  timestamps: true
}
);

module.exports = model('Cliente', ClienteSchema);