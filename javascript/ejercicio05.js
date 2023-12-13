
/*Ejercicio 5: Catálogo Musical
Imagina que estás creando un sistema de gestión para un catálogo musical.
Cada canción tiene las siguientes propiedades:
  Nombre de la Canción
  Género
  Duración (en minutos)
Implementa un programa que permita realizar las siguientes operaciones:
Agregar Canción: Permite al usuario ingresar información sobre una nueva canción y
agrégala al catálogo.
Listar Canciones: Muestra en la consola la información detallada de todas las canciones
en el catálogo. Si el catálogo está vacío, imprime un mensaje indicando que no hay
canciones.
Buscar Canciones por Género: Pide al usuario que ingrese un género y muestra en la
consola todas las canciones de ese género.
Calcular Promedio de Duración: Calcula y muestra en la consola el promedio de la
duración de todas las canciones en el catálogo. (opcional)
*/

/*function crearCatalogo() {
    
    return {
    agregarCancion: agregarCancion,
    listarCanciones: listarCanciones,
    buscarPorGenero: buscarPorGenero,
    calcularPromedioDuracion: calcularPromedioDuracion
    };
    }



    let miCatalogo = crearCatalogo();
    // ...
    */
    /*let catalogo=[];
    function agregarCancion(name, genre, duration){
      catalogo.push({
        nombre: name,
        genero : genre,
        duracion: duration
      })

    };
    
    console.log(catalogo);

    agregarCancion('Master of puppets', 'Metal',8.35 );
    agregarCancion('anvil of crom', 'OST',2.38 );
    console.log(catalogo);
*/
    function crearCatalogo(){

      let catalogo=[];

      function agregarCancion(name, genre, duration){
        catalogo.push({
          nombre: name,
          genero : genre,
          duracion: duration
        })
    };
      function verCatalogo(){
        return(console.log(catalogo));
      }
    return {
      agregarCancion: agregarCancion,
      verCatalogo: verCatalogo
    }
    }


    let miCatalogo = crearCatalogo();

    miCatalogo.agregarCancion('Master of puppets', 'Metal',8.35 );
    miCatalogo.agregarCancion('anvil of crom', 'OST',2.38  );
    console.log(miCatalogo);
    miCatalogo.verCatalogo();

