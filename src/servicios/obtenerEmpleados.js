const {Empleado, Departamento} = require ("../db.js")
const empleadoRepositorio = require ("../repositorios/empleadosRepositorio")

const obtenerEmpleados = async () => {
      const empleados = await Empleado.findAll({
        include: {
          model: Departamento,
          attributes: [
            'nombre',
          ],
        },
      });
      return empleados
  };

  module.exports = obtenerEmpleados;
