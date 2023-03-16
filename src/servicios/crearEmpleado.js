const {Empleado, Departamento} = require ("../db")
const empleadoRepositorio = require ("../repositorios/empleadosRepositorio")

const crearEmpleado = async (nif, nombre, apellido1, apellido2, codigo_departamento) =>{
    if (!nif || !nombre || !apellido1 || !codigo_departamento)
        throw new Error("Por favor completa todos los campos obligatorios");
            // const nuevoEmpleado = await empleadoRepositorio.crearNuevoEmpleado(nif, nombre, apellido1, apellido2, codigo_departamento)
        const nuevoEmpleado = await Empleado.create({
            nif,
            nombre,
            apellido1,
            apellido2,
            codigo_departamento
        })
    return;
}

module.exports= crearEmpleado;