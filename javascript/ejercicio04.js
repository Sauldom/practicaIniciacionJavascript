// Este programa simula una llamada asincrónica para obtener un usuario
function obtenerUsuario(id) {
    let usuario ;
    setTimeout(() => {
    if (id === 1) {
    usuario = { id: 1, nombre: 'John Doe' };
    }
    }, 2000);
    return new Promise(usuario);
    }
    const usuario = obtenerUsuario(1);
    console.log(usuario, undefined);