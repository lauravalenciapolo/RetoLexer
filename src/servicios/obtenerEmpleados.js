const {Empleado, Departamento} = require ("../db.js")
const empleadoRepositorio = require ("../repositorios/empleadosRepositorio")

const obtenerEmpleados = async () => {
      const empleados = await empleadoRepositorio.obtenerEmpleados();
      return empleados
  };

  module.exports = obtenerEmpleados;
