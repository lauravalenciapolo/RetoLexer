const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const obtenerEmpleado = require("../src/servicios/obtenerEmpleado");
const crearEmpleado = require("../src/servicios/crearEmpleado");

chai.use(chaiAsPromised);

var expect = chai.expect;
var assert = chai.assert;

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