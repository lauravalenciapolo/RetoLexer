const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const empleadosBD = require('./src/empleadosBD/index.js')
const departamentosBD = require('./src/departamentosBD/index')

conn.sync({ force: true }).then(() => {

  departamentosBD();
  empleadosBD();
  server.listen(1234, () => {
    console.log('%s listening at 1234'); 
  });
});
