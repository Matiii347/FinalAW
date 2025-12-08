import * as modelo from './modelo.proveedores.mjs'

const MENSAJES_PROVEEDOR = {
    '23505': 'El codigo de proveedor ya existe',
    '22001': 'La longitud del campo execede los permitidos'
}
const MENSAJES_TIPOS = {
    INFO: 'info',
    ERROR: 'error'
}

async function obtenerProveedores(req, res) {
    try {
        const resultado = await modelo.obtenerProveedores();
        if (resultado.rows.length > 0) {
            res.json(resultado.rows);
        } else {
            res.status(404).json({ mensaje: 'Proveedores no encontrados', tipo: MENSAJES_TIPOS.INFO });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: MENSAJES_PROVEEDOR[error.code] || 'Error en el servidor', tipo: MENSAJES_TIPOS.ERROR });
    }
}

async function obtenerProveedor(req, res) {
    try {
        const { id } = req.params;
        const resultado = await modelo.obtenerProveedor(id);
        if (resultado.rows.length > 0) {
            res.json(resultado.rows);
        } else {
            res.status(404).json({ mensaje: 'Proveedor no encontrado', tipo: MENSAJES_TIPOS.INFO });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: MENSAJES_PROVEEDOR[error.code] || 'Error en el servidor', tipo: MENSAJES_TIPOS.ERROR });
    }
}

async function crearProveedor(req, res) {
    try {
        const { nombre, telefono, email } = req.body;
        if (!nombre || !telefono || !email) {
            return res.status(400).json({ mensaje: 'Datos incompletos', tipo: MENSAJES_TIPOS.ERROR });
        }
        const resultado = await modelo.crearProveedor({
            nombre: nombre.trim(),
            telefono: telefono.trim(),
            email: email.trim(),
        });
        res.json({ mensaje: `Proveedor ${nombre} dado de alta`, tipo: MENSAJES_TIPOS.INFO });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: MENSAJES_PROVEEDOR[error.code] || 'Error en el servidor', tipo: MENSAJES_TIPOS.ERROR });
    }
}

async function modificarProveedor(req, res) {
    try {
        // Asignación desestructurante SP5/H4 p.417 TID AW1
        const { id } = req.params;
        const { nombre, telefono, email } = req.body;
        // Verificamos
        if (!id || !nombre || !telefono || !email) {
            return res.status(400).json({ mensaje: 'Datos incompletos', tipo: MENSAJES_TIPOS.ERROR });
        }
        const resultado = await modelo.modificarProveedor({
            id,
            nombre: nombre.trim(),
            telefono: telefono.trim(),
            email: email.trim(),
        });
        // { codigo: codigoModificado } -> porque codigo ya está declarada en este ámbito
        // Ámbito SP4/H3 p.263 TID AW1
        res.json({ mensaje: `Proveedor ${nombre} modificado`, tipo: MENSAJES_TIPOS.INFO });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: MENSAJES_PROVEEDOR[error.code] || 'Error en el servidor', tipo: MENSAJES_TIPOS.ERROR });
    }
}

async function eliminarProveedor(req, res) {
    try {
        // Asignación desestructurante SP5/H4 p.417 TID AW1
        const { id } = req.params;
        const resultado = await modelo.eliminarProveedor(id);
        if (resultado.rows.length > 0) {
            const { nombre: nombreEliminado } = resultado.rows[0];
            res.status(200).json({ mensaje: `Proveedor con nombre: ${nombreEliminado} eliminado`, tipo: MENSAJES_TIPOS.INFO });
        } else {
            res.status(404).json({ mensaje: 'Proveedor no encontrado', tipo: MENSAJES_TIPOS.ERROR });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: MENSAJES_PROVEEDOR[error.code] || 'Error en el servidor', tipo: MENSAJES_TIPOS.ERROR });
    }
}
export { obtenerProveedor, obtenerProveedores, crearProveedor, modificarProveedor, eliminarProveedor };