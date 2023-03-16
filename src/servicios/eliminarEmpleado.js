const { Empleado } = require("../db.js");
const empleadoRepositorio = require("../repositorios/empleadosRepositorio");
// const {eliminarEmpleado1} = require('../repositorios/empleadosRepositorio')

const eliminarEmpleado = async (codigo) => {
  if (codigo) {
    const empleadoEliminado = await empleadoRepositorio.eliminarEmpleado(
      codigo
    );
    return;
  } else {
    throw new Error("Por favor introduzca el código del empleado");
  }
};

module.exports = eliminarEmpleado;
