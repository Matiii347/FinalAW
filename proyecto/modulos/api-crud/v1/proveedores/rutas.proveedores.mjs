import express from 'express'
import * as controlador from './controlador.proveedores.mjs'

const rutasProveedores = express.Router()

rutasProveedores.get('/', controlador.obtenerProveedores);
rutasProveedores.get('/:id', controlador.obtenerProveedor);
rutasProveedores.post('/', controlador.crearProveedor);
rutasProveedores.put('/:id', controlador.modificarProveedor);
rutasProveedores.delete('/:id', controlador.eliminarProveedor);

export default rutasProveedores;