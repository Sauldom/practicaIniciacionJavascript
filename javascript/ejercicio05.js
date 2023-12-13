
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

      this.catalogo=[];

      function agregarCancion(name, genre, duration){
        catalogo.push({
          nombre: name,
          genero : genre,
          duracion: duration
        });
      };
      function verCatalogo(){
        return(console.log(catalogo));
      };

      function listarCanciones(){
        if (catalogo.length ===0){
          console.log('Pues no hay nada de nada');
        }else{
          catalogo.map(function (cancion){
            console.log(`Cancion: ${cancion.nombre} --- Estilo: ${cancion.genero} --- Duracion:${cancion.duracion}`);
            });
        }
        };
        
      function buscarCancionesGenero(genero=prompt('Introduce el genero musical a buscar: ')){
          
        const result = catalogo.filter((cancion) =>cancion.genero === genero);
        if (result.length ===0){
          console.log('No hay ninguna cancion con ese genero');
         }else{
          console.log(result);
        };
      };

      function calcularPromedioDuracion(){
        let suma =0;
        for(i=0;i<catalogo.length;i++){
          suma+=catalogo[i].duracion;
        }
        return suma/catalogo.length;
      };
        
        return {
          agregarCancion: agregarCancion,
          verCatalogo: verCatalogo,
          listarCanciones : listarCanciones,
          buscarCancionesGenero: buscarCancionesGenero,
          calcularPromedioDuracion: calcularPromedioDuracion
        }
    };
    


    let miCatalogo = crearCatalogo();
    miCatalogo.listarCanciones();

    miCatalogo.agregarCancion('Master of puppets', 'Metal',8.35 );
    miCatalogo.agregarCancion('anvil of crom', 'OST',2.38  );
    miCatalogo.agregarCancion('hola', 'pop',3.38  );

    console.log(miCatalogo);
    miCatalogo.verCatalogo();
    miCatalogo.listarCanciones();
    miCatalogo.buscarCancionesGenero();
    miCatalogo.agregarCancion('hola2', 'pop',3.38  );
    miCatalogo.agregarCancion('hola3', 'pop',3.38  );
    miCatalogo.buscarCancionesGenero();
    console.log(miCatalogo.calcularPromedioDuracion());



