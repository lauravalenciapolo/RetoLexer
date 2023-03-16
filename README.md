# Prueba técnica Lexer Latam
# Presentada por: Laura Daniela Valencia Polo C.C 1152452445

## Descripción del proyecto

Elaborar un micro servicio para la tabla “empleado” el cual sea capaz de insertar, actualizar, borrar y consultar (CRUD) información utilizando el entorno de Node.js.



En la raiz del proyecto crear un archivo llamado: `.env`, en el cual se deben ingresar los siguientes datos para permitir la conexion con la base de datos:

```env
DB_USER= usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Los valores `usuariodepostgres` y `passwordDePostgres` se deben reemplazar con sus propias credenciales para conectarse.


### Endpoints

- GET <https://pokeapi.co/api/v2/pokemon>
- GET <https://pokeapi.co/api/v2/pokemon/{id}>
- GET <https://pokeapi.co/api/v2/pokemon/{name}>
- GET <https://pokeapi.co/api/v2/type>


- [ ] __GET /pokemons__:
  - Obtener un listado de los pokemons desde pokeapi.
  - Debe devolver solo los datos necesarios para la ruta principal
- [ ] __GET /pokemons/{idPokemon}__:
  - Obtener el detalle de un pokemon en particular
- [ ] __POST /empleado__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación por body
 

## Testing

- [ ] Al menos tener un componente del frontend con sus tests respectivos
- [ ] Al menos tener una ruta del backend con sus tests respectivos
- [ ] Al menos tener un modelo de la base de datos con sus tests respectivos
