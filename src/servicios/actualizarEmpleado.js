const { Empleado } = require("../db.js");

const actualizarEmpleado = async (
  codigo,
  nif,
  nombre,
  apellido1,
  apellido2,
  codigo_departamento
) => {
  const encontrarEmpleado = await Empleado.findOne({
    where: {
      codigo,
    },
  });
  if (!encontrarEmpleado) throw new Error("Verifique el código del empleado");
  if (encontrarEmpleado) {
    encontrarEmpleado.update({
      nif,
      nombre,
      apellido1,
      apellido2,
      codigo_departamento,
    });
    await encontrarEmpleado.save();
    return encontrarEmpleado;
  }
};

module.exports = actualizarEmpleado;
