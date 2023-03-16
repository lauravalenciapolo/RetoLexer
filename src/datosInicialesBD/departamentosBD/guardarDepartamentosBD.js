const { Departamento } = require('../../db.js');

async function guardarDepartamentosBD(departamento){

    const instance = await Departamento.create({
        nombre: departamento.nombre,
        presupuesto: departamento.presupuesto,
    });
}

module.exports = guardarDepartamentosBD;