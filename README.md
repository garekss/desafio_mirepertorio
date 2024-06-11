### Desarrollo:


   
    Se crea base de datos "repertorio" 
    Se define  tabla "canciones" con contenido "Titulo, nombre del artista y Tono."
  
  Se ejecuta el siguiente comando:
  
`$ npm install pg express`

### Consultas CRUD:
- Una ruta POST/cancion que reciba los datos correspondientes a una canción y realice a través de una función asíncrona la inserción en la tabla canciones.

- Una ruta GET/canciones que devuelva un JSON con los registros de la tabla canciones.

- Una ruta PUT/cancion/:id' que reciba los datos de una canción que se desea editar, ejecuta una función asíncrona para hacer la consulta SQL correspondiente y actualice ese registro de la tabla canciones.

- Una ruta DELETE/cancion/:id' que reciba por queryString el id de una canción y realiza una consulta SQL a través de una función asíncrona para eliminarla de la base de datos.



# Formato HTML
![image](https://github.com/garekss/desafio_mirepertorio/assets/159491346/276c9b4b-8de7-4139-a670-9b8a6936ed7f)
