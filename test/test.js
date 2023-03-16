const{expect} = require("chai");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const obtenerEmpleado = require("../src/servicios/obtenerEmpleado");
const crearEmpleado = require("../src/servicios/crearEmpleado");
const actualizarEmpleado = require("../src/servicios/actualizarEmpleado")

chai.use(chaiAsPromised);

describe("obtener empleado", function() {
  it("Arroja un error cuando falta el parámetro codigo", () => {
    return expect(obtenerEmpleado()).to.be.rejectedWith(
      "Ingrese el código del empleado para consultar"
    );
  });
});

describe("Crear Empleado", () => {
  it("Arroja un error cuando falta algún parámetro obligatorio", () => {
    return expect(
      crearEmpleado("", "Camila", "Perez", "Guisao", 1)
    ).to.be.rejectedWith("Por favor completa todos los campos obligatorios");
  });
});

describe("actualizarEmpleado", () => {
  it("debería actualizar un empleado correctamente", async () => {
    const codigo = 1;
    const nif = "kitr8A";
    const nombre = "Diego";
    const apellido1 = "Alegria";
    const apellido2 = "Gómez";
    const codigo_departamento = 1;

    const resultado = await actualizarEmpleado(
      codigo,
      nif,
      nombre,
      apellido1,
      apellido2,
      codigo_departamento
    );

    expect(resultado).to.eql({
      codigo,
      nif,
      nombre,
      apellido1,
      apellido2,
      codigo_departamento,
    });
  });
});