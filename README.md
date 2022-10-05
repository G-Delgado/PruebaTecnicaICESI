# PruebaTecnicaICESI
 **Tanto para trabajar con esta prueba en python o en node, se necesita tener el phpmyadmin u otro manejador de base de datos que permita utilizar las mismas conexiones con MySQL que las descritas en el código**

## Instalar phpMyAdmin
Para instalar phpMyAdmin se requiere buscar a instalar XAMPP en el navegador, el cual se encuentra disponible en una página de apache. `https://www.apachefriends.org/es/index.html`.
Luego de descargar el archivo XAMPP es necesario iniciar la descarga y tener como mínimo PHP, Apache y MySQL en el paquete de descarga de la aplicación. Luego, abrimos el panel de control y le damos a Start a Apache y a MySQL.
*Tras haber hecho esto, podemos ir a un navegador y poner `http://localhost/phpmyadmin/` que es la dirección en la que tendremos el phpmyadmin*
En caso de que no abra, también tendremos que instalar phpmyadmin por separado.

## Creación de Usuario
El phpmyadmin nos permite trabajar con usuarios predeterminados. Sin embargo, vamos a crear un usuario y una base de datos para que coincida con la del código.
Para esto, iremos a la parte superior de phpMyAdmin donde dice Cuentas de Usuarios. Luego, damos click en agregar cuenta de usuario. Ponemos el nombre de usuario 'rootTest', el host 'localhost', la contraseña '123456' y en los privilegios le damos check a todos. Posteriormente le damos a continuar y tendremos un nuevo usuario.

## Creación base de datos
Para crear la base de datos, le daremos click a *Nueva* en el menú lateral del phpMyAdmin y le pondremos el nombre de la base de datos 'prueba_tecnica' en este caso.
Ahí dentro empezaremos a agregar las tablas y los atributos de cada tabla como lo necesitemos. 

## Codigo
Ya teniendo la base de datos creada y el usuario agregado, procederemos a realizar los ajustes en el código

## Python Flask
En python haremos `pip install flask flask_mysqldb` para poder tener las librerias de mysql y de flask.
Luego de esto, si queremos correr el código haremos:
`python .\PythonFlask\app.py`
Que es para ejecutar el archivo python donde se hace la petición.
Cuando queramos revisar la petición, tendremos que dirigirnos a `localhost:5000/facturas`

## Node Express
Para node, entraremos a la carpeta NodeExpress y haremos `npm i` para poder instalar todas las dependencias encontradas en el package.json
Luego, desde la carpeta NodeExpress haremos `node app.js` o `nodemon app.js` para poder correr el código e iniciar el servidor. 
Luego de iniciarlo entraremos a `localhost:8080/facturas`
8080 pues es el puerto especificado en el código pero puede ser cambiado.

## Nota
Cabe recalcar que al momento de hacer la petición, XAMPP debe estar prendido con Apache y MySQL iniciados.
