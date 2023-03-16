const {Empleado, Departamento} = require ("../db.js")

const eliminarEmpleado = (codigo)=>{
    Empleado.destroy({
        where: {
          codigo,
        },
      })
};

const obtenerEmpleado = (codigo) =>{
  Empleado.findByPk(codigo, {
    include: {
        model: Departamento,
        attributes: [
          'nombre',
        ],
      },
})
}

const obtenerEmpleados = () =>{
  Empleado.findAll({
    include: {
      model: Departamento,
      attributes: [
        'nombre',
      ],
    },
  });
}

const crearNuevoEmpleado = async (nif, nombre, apellido1, apellido2, codigo_departamento) =>{
  Empleado.create({
    nif,
    nombre,
    apellido1,
    codigo_departamento
})
const codigodepartamento = await Departamento.findAll({
    where: {codigo:codigo_departamento}
})
nuevoEmpleado.addDepartamento(codigodepartamento)
}

const repositories = {
    eliminarEmpleado,
    obtenerEmpleado,
    obtenerEmpleados,
    crearNuevoEmpleado
}
module.exports = repositories