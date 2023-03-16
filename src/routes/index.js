const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Empleados = require ("./Empleados")

const router = Router();

router.use("/empleado", Empleados); // cuando pongan /empleado los lleve al archivo Empleados


module.exports = router;
