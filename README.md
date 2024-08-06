# Instrucciones para iniciar 

## Paso a paso

 - Clonar el repositorio

 - Crear una base de datos con el nombre de *CrudMaster* _-Solo crear la base de datos-_

 - Crear archivo *.env* con las variables de entorno

 - instalar depentendias cpn ***npm install***

 - Compilar la aplicacion ***npm run test***

 - Inicializar la aplicacion ***npm start***


### La creacion del *.env* debe tener los siguientes campos

```txt
DB_HOST=localhost
DB_USER=root
DB_NAME=CrudMaster
DB_PASSWORD=
DB_DIALECT=mysql
JWT_SECRET=
```

### Script para la creacion de la base de datos

```sql

-- Creacion
CREATE DATABASE CrudMaster;


-- Uso
USE CrudMaster;

```


### Creacion de usuario Admin para realizar pruebas

``` txt
-- Crear un usuario usando postman ejemplo:
{
  "email": "admin@admin.com",
  "password": "1234"
  "roleId": 1
}

```

### Asi la app queda lista para realizar pruebas