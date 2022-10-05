import bodyParser from "body-parser";
import express from "express";
import mysql from 'mysql'

const app = express()
// Esto se hace solo cuando tenemos un .env Pero igual lo dejaremos
const PORT = process.env.PORT || 8080

// Agregamos el body parser a lo que utilizará la app de express
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Hacemos la pool de la DB con los datos
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'rootTest',
    password: '123456',
    database: 'prueba_tecnica'
})

// Creamos la ruta para hacer el get que queremos
app.get("/cursos", (req, res) => {
    //Conexión con la DB
    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`Conectado con el id ${connection.threadId}`)

        // Hacemos la query
        // QUERY
        
        connection.query('SELECT f.num_factura, f.fecha, SUM(d.cantidad * d.precio) AS total, SUM(d.cantidad) as items FROM FACTURA f, DETALLE d WHERE f.num_factura = d.id_factura GROUP BY d.id_factura', (err,rows) => {
            // Retornamos la conexión
            connection.release()

            if (!err) {
                console.log(rows)
                for (let fila of rows) {
                    if (fila.total > 1000000 && fila.items >= 5) {
                        fila.total = fila.total*0.9
                        fila.mensaje = "Descuento del 10% aplicado"
                    }
                }
                console.log(rows)
                res.status(200).send(rows)
            } else {
                console.log(err)
                res.status(503).send("ERROR!")
            }
        })
    })
})

app.listen(PORT, () => {
    console.log(`Conectado y escuchando en localhost:${PORT}`)
})