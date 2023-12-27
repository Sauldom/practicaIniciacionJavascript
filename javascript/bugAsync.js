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
    //console.log('fin del carga del usuario');
};
//ejecuto el main
main();
//console.log('fuera del main');
