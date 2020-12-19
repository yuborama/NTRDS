const Pelicula = require("../models/pelicula");
const Peliculactrl = {};

Peliculactrl.NewCliente = async (req, res) => {
  const {
    titulo,
    genero,
    clasificacionF,
    formato,
    imagen_logo,
    imagen_portada,
    imagen_background,
    resumen,
    protagonistas,
    director
  } = req.body;
  const NewUser = User({
    titulo,
    genero,
    clasificacionF,
    formato,
    imagen_logo,
    imagen_portada,
    imagen_background,
    resumen,
    protagonistas,
    director
  });
  console.log(NewUser);
  await NewUser.save();
  res.redirect("/");
};

Peliculactrl.UpdateCliente = async (req, res) => {
  const { cedula, nombre, telefono, email } = req.body;
  await Pet.findByIdAndUpdate(req.params.id, {
    cedula,
    nombre,
    telefono,
    email,
  });
};

module.exports = Clientectrl;
