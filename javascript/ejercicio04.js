// Este programa simula una llamada asincrónica para obtener un usuario
/*function obtenerUsuario(id) {
    let usuario;
    setTimeout(() => {
    if (id === 1) {
    usuario = { id: 1, nombre: 'John Doe' };
    }
    }, 2000);
    return usuario;
    }
    const usuario = obtenerUsuario(1);
    console.log(usuario);

*/


//primero devuelvo una promesa del usuario
function obtenerUsuarioMod(id) {
    let usuario;
    return  new Promise ((resolve) =>{
        setTimeout(() => {
        if (id === 1) {
        usuario = { id: 1, nombre: 'John Doe' };
        resolve(usuario);
        }
        }, 2000);       

    });
};
//creo una main asincrono y un usuario 2 que espera la funcion 
const main = async () =>{
    const usuario2 = await obtenerUsuarioMod(1);
    console.log(usuario2);
};
//ejecuto el main
main();
    