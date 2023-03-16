const {Empleado, Departamento} = require ("../db.js")
const empleadoRepositorio = require ("../repositories/empleados-repository")

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
