const { Empleado, Departamento } = require("../db.js");
const empleadoRepositorio = require("../repositorios/empleadosRepositorio");

const obtenerEmpleado = async (codigo) => {
  if (!codigo) throw new Error(`Ingrese el código del empleado para consultar`);
  const empleadoById = await empleadoRepositorio.obtenerEmpleado(codigo);
  return empleadoById;
};

module.exports = obtenerEmpleado;
