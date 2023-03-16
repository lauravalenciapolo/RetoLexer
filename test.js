const { expect } = require('chai');
const obtenerEmpleado = require('./src/servicios/obtenerEmpleado');
const crearEmpleado = require('./src/servicios/crearEmpleado')

describe('Obtener error al obtener empleado', function() {
  it('Arroja un error cuando falta el parámetro codigo', function() {
    expect(function() {
      obtenerEmpleado();
    }).to.throw(`Ingrese el código del empleado para consultar`);
  });
});

describe('Obtener error al crear empleado', () => {
  it('debería arrojar un error cuando faltan parametros', () => {
    expect(() => {
      crearEmpleado("jujuj", 'laura');
    }).to.throw("Por favor completa todos los campos obligatorios");
  });
});

const assert = require('assert');

describe('miFuncion', () => {
  it('debería arrojar un error cuando falta el parámetro requerido', () => {
    assert.throws(() => {
      crearEmpleado('juju', 'laura');
    }, Error("Por favor completa todos los campos obligatorios"));
  });
});
