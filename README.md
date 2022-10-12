# DAM_TP_Final
El proyecto se conforma como trabajo final del seminario "Desarrollo de Aplicaciones Multiplataforma" dictado durante la 6ta coorte de la Carrera de Especializacion en Internet de las Cosas (CEIoT) dictado por el Laboratorio de Sistemas Embebidos (LSE) de la Universidad de Buenos Aires.  

# Estructura
El proyecto consta de 3 partes
- Base de datos basada en MariaDB encarga de albergar todas las tablas
- Backend desarrollado Javascript NodeJS
- Frontend desarrollado con Ionic.  

**NOTA**: la base de datos MariaDB y el administrador PHP MyAdmin funcionan en un entorno de docker-compose **separados** del backend y frontend.  
El servidor de base de datos MariaDB atiende en el puerto **3306** y PHP MyAdmin en el puerto **80** de locahost.
EL backend por su parte atiende peticiones provenientes del frontend en el puerto **3000** para luego relizar las consultas a la base de datos.  

## Credenciales para la base de datos
- user: root
- password: root

# Como iniciar el proyecto
Primero se debe iniciar el proyecto con los servicios dockerizados

```docker-compose up```

BACKEND  
Moverse a la carpeta 'backend' y ejecutar el comando  
```npm serve```

FRONTEND  
Moverse a carpeta 'frontend' y ejecutar el comando  
```npm serve```

Llegado este punto el proyecto estar funcionando de manera correcta en la direccion
```http://localhost:8100/home```


# Endpoints del backend
## Dispositivos
```
- GET / 
    Trae un array de dispositivos

- GET /:idDispositivo
    Trae un dispositivo con la id especificada en el path.  

- GET /:idDispositivo/logs
    Trae todos los logs de riegos del dispositivo especificado en el path.  

- POST /:idDispositivo/agregarLog
    Agrega un nuevo registro en el log de riegos.  


/api/medicion/agregar

```
## Mediciones
```
- GET /:idDispositivo
    Trae todas las mediciones del dispositivo especificado en el path

- GET /:idDispositivo/ultima
    Trae todas la ultima medicion del dispositivo especificado en el path

-POST /agregar
    Agrega una nueva medicion en la tabla dispositivos.
```
```
- GET /:electrovalvulaId/todas'
    Trae todas los logs de riegos de la valvula especificada en el path.

- POST /:electrovalvulaId
    Agrega un nuevo registo de riego en la tabla Logs_Riegos.

- GET /:electrovalvulaId/actual
    Trae el valor actual de la electrovalvula especificada en el path.
```