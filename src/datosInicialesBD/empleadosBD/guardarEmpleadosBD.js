const { Empleado } = require('../../db.js');

async function guardarEmpleadosBD(empleado){

    const instance = await Empleado.create({
        nif: empleado.nif,
        nombre: empleado.nombre,
        apellido1: empleado.apellido1,
        apellido2: empleado.apellido2,
        codigo_departamento: empleado.codigo_departamento,
    });
}

module.exports = guardarEmpleadosBD;