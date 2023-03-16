const { Empleado } = require("../db.js");
const empleadoRepositorio = require("../repositorios/empleadosRepositorio");

const eliminarEmpleado = async (codigo) => {
  if (codigo) {
    // const empleadoEliminado = await empleadoRepositorio.eliminarEmpleado(codigo)
    const empleadoEliminado = await Empleado.destroy({
      where: {
        codigo,
      },
    });
    if (!empleadoEliminado)
      throw new Error(
        `No existe el empleado identificado con código: ${codigo}`
      );
    return;
  } else {
    throw new Error("Por favor introduzca el código del empleado");
  }
};

module.exports = eliminarEmpleado;
