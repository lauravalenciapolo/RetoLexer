const {Empleado, Departamento} = require ("../db.js")
const empleadoRepositorio = require ("../repositories/empleados-repository")

    const obtenerEmpleado = async (codigo) => {
      if (!codigo)
          throw new Error(
            `Ingrese el código del empleado para consultar`
          );
        // const empleadoById = await empleadoRepositorio.obtenerEmpleado(codigo);
        const empleadoById = await Empleado.findByPk(codigo, {
          include: {
            model: Departamento,
            attributes: ["nombre"],
          },
        });
        return empleadoById
    };

module.exports = obtenerEmpleado;