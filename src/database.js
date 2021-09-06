const mysql = require("mysql");
const { promisify } = require("util")

const { database } = require("./keys");

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
if(err) {
    if(err.code === "PROTOCOL_CONECTION_LOST") {
        console.error("La base de datos ha sido desconectada")
    }
    if(err) {
        if(err.code === "ER_CON_COUNT_ERROR") {
            console.error("La base de datos tiene mas conexiones");
        }

    if(err) {
        if(err.code === "ECONNREFFUSED") {
            console.error("La conexion ha sido rechazada");
        }
    }
}
}

if (connection) connection.release();
console.log("La base de datos ha sido conectada")
return;
});

pool.query = promisify(pool.query);

module.exports = pool;