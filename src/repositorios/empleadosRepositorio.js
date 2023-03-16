const { Empleado, Departamento } = require("../db.js");

const eliminarEmpleado = (codigo) => {
  Empleado.destroy({
    where: {
      codigo,
    },
  });
};

const obtenerEmpleado = (codigo) => {
  const empleado = Empleado.findByPk(codigo, {
    include: {
      model: Departamento,
      attributes: ["nombre"],
    },
  });
  return empleado;
};

const obtenerEmpleados = () => {
  const empleados = Empleado.findAll({
    include: {
      model: Departamento,
      attributes: ["nombre"],
    },
  });
  return empleados;
};

const crearNuevoEmpleado = (
  nif,
  nombre,
  apellido1,
  apellido2,
  codigo_departamento
) => {
  Empleado.create({
    nif,
    nombre,
    apellido1,
    apellido2,
    codigo_departamento,
  });
};

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

module.exports = {
  eliminarEmpleado,
  obtenerEmpleado,
  obtenerEmpleados,
  crearNuevoEmpleado,
  actualizarEmpleado,
};
