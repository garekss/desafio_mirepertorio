
const { Pool } = require("pg");

const pool = new Pool({
    user: process.env.USERDB || "postgres", 
    host: process.env.HOSTDB || "127.0.0.1",
    password: process.env.PASSDB || "nacho123", 
    port: process.env.PORTDB || 5432, 
    database: process.env.DATABASE || "postgres", 
  });

  // agregar cancion
  const agregarCancion = async (titulo, artista, genero) => {
    const consulta = {
      text: "INSERT INTO canciones (titulo, artista, genero) VALUES ($1, $2, $3) RETURNING *",
      values: [titulo.toUpperCase(), artista.toUpperCase(), genero.toUpperCase()],
    };
    return pool.query(consulta);
  };

// obtenercancion
const obtenerCanciones = async () => {
  return pool.query("SELECT * FROM canciones");
};

// editar
const editarCancion = async (id, titulo, artista, genero) => {
  const consulta = {
    text: "UPDATE canciones SET titulo = $1, artista = $2, genero = $3 WHERE id = $4",
    values: [titulo.toUpperCase(), artista.toUpperCase(), genero.toUpperCase(), id],
  };
  return pool.query(consulta);
};

// aliminar
const eliminarCancion = async (id) => {
  const consulta = {
    text: "DELETE FROM canciones WHERE id = $1",
    values: [id],
  };
  return pool.query(consulta);
};

module.exports = {
agregarCancion, obtenerCanciones, editarCancion, eliminarCancion,
};