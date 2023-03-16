const guardarEmpleadosBD = require("./guardarEmpleadosBD");

const empleados = require('./empleados.js')

function empleadosIniciales(){
    empleados.forEach(empleado => guardarEmpleadosBD(empleado));
}

module.exports = empleadosIniciales;