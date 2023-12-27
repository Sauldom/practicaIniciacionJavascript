

/* el error estaba en el bucle for 
al poner en la comparacion <= numeros.length es 5 pero los
array de numeros empiezan en 0 por lo que intentar acceder a una posicion del array 
que no existe por lo que aparece un NaN*/
const calcularPromedio = (numeros) => {
    let sumaTotal = 0;
    for (let i = 0; i < numeros.length; i++) {
    sumaTotal += numeros[i];
    }
    const promedio = sumaTotal / numeros.length;
    return promedio;
    };

    const listaNumeros = [1, 2, 3, 4, 5];
    const promedioNumeros = calcularPromedio(listaNumeros);
    

console.log(promedioNumeros);

/*let lista = [1,2,3,4,5,6,7,8];
console.log (calcularPromedio(lista));
console.log(4+NaN);*/