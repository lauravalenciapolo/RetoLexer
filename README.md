# Prueba técnica Lexer Latam
## Presentada por: Laura Daniela Valencia Polo C.C 1152452445

## Descripción del proyecto

Elaborar un micro servicio para la tabla “empleado” el cual sea capaz de insertar, actualizar, borrar y consultar (CRUD) información utilizando el entorno de Node.js.

El proyecto se realizó teniendo en cuenta la arquitectura de capas:
- Primera capa (Rutas): Recibe la información referente a las peticiones
- Segunda capa (Servicios): Se realiza la lógica de negocio y sus validaciones, las cuales son utilizadas en las rutas (primera capa)
- Tercera capa (Repositorios): Se establece la conexión con la base de datos, esta información es requerida por los servicios.

Se inicializaron datos tanto para los departamentos como para empleados, esto con el fin de que se puedan ejecutar los endpoints sin requerir la creación de estos valores con anterioridad.  
Adicionalmente, se implementó el montaje por medio de docker ....
Y se realizaron algunas pruebas unitarias ...


__Importante__: En la raiz del proyecto se debe crear un archivo llamado: `.env`, en el cual se deben ingresar los siguientes datos para permitir la conexion con la base de datos:

DB_USER= usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost

Los valores `usuariodepostgres` y `passwordDePostgres` se deben reemplazar con sus propias credenciales para conectarse.


## Comenzar

Descarga el archivo, ya sea desde github o directamente del correo y abre el proyecto. Después de crear el archivo .env, en la raiz del proyecto abre la terminal y ejecuta el comando npm install, una vez tengas instalado todas las dependencias, puede ejecutar el comando npm start y empezar a realizar peticiones.

### Endpoints

A continuacion, se especifican los endopoints con los cuales puede realizar las peticiones

- GET <https://localhost:1234/empleado>: Se obtiene toda la lista de los empleados registrados en la base de datos con su respectivo nombre de departamento
- GET <https://localhost:1234/empleado/{codigo}>: Reemplazar {codigo} con un valor numérico de un código existente para un empleado. Se obtiene la información del empleado registrado con ese código, al igual, que el nombre del departamento al cual está asociado.
- DELETE <https://localhost:1234/empleado/{codigo}>: Recibe por paramas codigo. Reemplazar {codigo} con un valor numérico de un código existente para un empleado. Este enpoint elimina toda la información del empleado registrado con ese código.
- POST <https://localhost:1234/empleado>: Recibe por body todos los datos obligatorios, los cuales son: nif, nombre, apellido1 y codigo_departamento (el valor de apellido2 es opcional) y registra el empleado en la base de datos.
- PUT <https://localhost:1234/empleado>: Recibe por body todos los datos obligatorios, los cuales son: nif, nombre, apellido1 y codigo_departamento (el valor de apellido2 es opcional) y registra el empleado en la base de datos 

Para ejecutar las solicitudes, es necesario contar con una herramienta como postman, insomnia, entre otras. 
 
Cualquier duda no dudes en contactarme.

## Testing

- [ ] Al menos tener un componente del frontend con sus tests respectivos
- [ ] Al menos tener una ruta del backend con sus tests respectivos
- [ ] Al menos tener un modelo de la base de datos con sus tests respectivos
