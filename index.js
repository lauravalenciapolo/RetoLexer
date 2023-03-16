const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const empleadosBD = require('./src/datosInicialesBD/empleadosBD/index')
const departamentosBD = require('./src/datosInicialesBD/departamentosBD/index')

conn.sync({ force: true }).then(() => {

  departamentosBD();
  empleadosBD();
  server.listen(1234, () => {
    console.log('%s listening at 1234'); 
  });
});
