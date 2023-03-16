const { Empleado } = require("../db.js");
const empleadoRepositorio = require ("../repositorios/empleadosRepositorio")

const actualizarEmpleado = async (
  codigo,
  nif,
  nombre,
  apellido1,
  apellido2,
  codigo_departamento
) => {
  const actualizarEmpleado = await empleadoRepositorio.actualizarEmpleado(
    codigo,
    nif,
    nombre,
    apellido1,
    apellido2,
    codigo_departamento
  );
    return actualizarEmpleado;
  };


module.exports = actualizarEmpleado;
