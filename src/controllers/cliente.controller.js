const Cliente = require("../models/cliente");
const Clientectrl = {};

Clientectrl.NewCliente = async (req, res) => {
  const { cedula, nombre, telefono, email } = req.body;
  const NewUser = User({ cedula, nombre, telefono, email });
  console.log(NewUser);
  await NewUser.save();
  res.redirect("/");
};

Clientectrl.UpdateCliente = async (req, res) => {
  const { cedula, nombre, telefono, email } = req.body;
  await Pet.findByIdAndUpdate(req.params.id, {
    cedula,
    nombre,
    telefono,
    email,
  });
};

module.exports = Clientectrl;
