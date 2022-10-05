from flask import Flask, jsonify
from flask_mysqldb import MySQL
from config import config

app = Flask(__name__)

conexion = MySQL(app)

@app.route('/facturas')
def listar_Facturas():
    try:
        cursor = conexion.connection.cursor()
        sql = "SELECT f.num_factura, f.fecha, SUM(d.cantidad * d.precio) AS total, SUM(d.cantidad) as items FROM FACTURA f, DETALLE d WHERE f.num_factura = d.id_factura GROUP BY d.id_factura"
        cursor.execute(sql)
        datos = cursor.fetchall()
        facturas = []
        for fila in datos:
            factura = {'num_factura':fila[0], 'fecha':fila[1], 'total':fila[2], 'items': fila[3]}
            if factura['total'] > 1000000 and factura['items'] >= 5:
                factura['total'] = factura['total']*0.9
                factura['mensaje'] = "Descuento del 10% aplicado"
            facturas.append(factura)
        # print(data)
        return jsonify({'cursos':facturas, 'mensaje': 'Facturas listadas'})
    except Exception as ex:
        print(ex)
        return "Error"

def pagina_no_encontrada(error):
    return "<h1>La página que intentas buscar no existe...</h1>"

if __name__ == '__main__':
    app.config.from_object(config['development'])
    app.register_error_handler(404,pagina_no_encontrada)
    app.run()