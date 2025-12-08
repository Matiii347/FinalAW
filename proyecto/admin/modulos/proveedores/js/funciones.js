export async function renderizarFormulario(registros, formulario) {
    try {
        const datos = await registros.json()
        if (registros.ok) {
            // Llenar form
            formulario.nombre.value = datos[0].nombre;
            formulario.marca.value = datos[0].telefono;
            formulario.stock.value = datos[0].email;
        } else {
            console.log('Registro no encontrado');
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export async function renderizarListado(respuesta) {
    try {
        const datosProductos = await respuesta.json()
        if (respuesta.ok) {
            const contenedorProductos =
                document.getElementById('contenedor-productos');
            let filas = '';
            datosProductos.forEach((proveedor) => {
                filas += `
                    <tr>                       
                        <td>${proveedor.nombre}</td>
                        <td>${proveedor.marca}</td>
                        <td>${proveedor.stock}</td>
                        <td><a href="./editar.html?id=${proveedor.id}">Editar</a></td>
                    </tr>
                `;
            });
            contenedorProductos.innerHTML = filas;
        } else {
            console.log(datosProductos.mensaje);
        }
    } catch (error) {
        console.log(error);
    }
}
