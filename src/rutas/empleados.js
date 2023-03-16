const obtenerEmpleado = require("../servicios/obtenerEmpleado");
const crearEmpleado = require("../servicios/crearEmpleado");
const eliminarEmpleado = require("../servicios/eliminarEmpleado");
const actualizarEmpleado = require("../servicios/actualizarEmpleado");
const obtenerEmpleados = require("../servicios/obtenerEmpleados");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const todosEmpleados = await obtenerEmpleados();
    return res.status(200).json(todosEmpleados);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

router.get("/:codigo", async (req, res) => {
  try {
    const { codigo } = req.params;
    let idEmpleado = await obtenerEmpleado(codigo);
    return res.status(200).json(idEmpleado);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const { nif, nombre, apellido1, apellido2, codigo_departamento } = req.body;
    const nuevoEmpleado = await crearEmpleado(
      nif,
      nombre,
      apellido1,
      apellido2,
      codigo_departamento
    );
    res.status(200).send(nuevoEmpleado);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

router.delete("/:codigo", async (req, res) => {
  try {
    const { codigo } = req.params;
    const borrarEmpleado = await eliminarEmpleado(codigo);
    res.status(200).send(borrarEmpleado);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

router.put("/:codigo", async (req, res) => {
  try {
    const { nif, nombre, apellido1, apellido2, codigo_departamento } = req.body;
    const { codigo } = req.params;
    const nuevaInfoEmpleado = await actualizarEmpleado(
      codigo,
      nif,
      nombre,
      apellido1,
      apellido2,
      codigo_departamento
    );
    res.status(200).send(nuevaInfoEmpleado);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

module.exports = router;
