const guardarDepartamentosBD = require("./guardarDepartamentosBD");

const departamentos = require('./departamentos')

function empleadosIniciales(){
    departamentos.forEach(departamento => guardarDepartamentosBD(departamento));
}

module.exports = empleadosIniciales;