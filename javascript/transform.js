const datos = [
    {
    id: 1,
    nombre: 'Juan',
    habilidades: ['JavaScript', 'HTML', 'CSS'],
    proyectos: [
    { id: 1, nombre: 'Proyecto 1' },
    { id: 2, nombre: 'Proyecto 2' }
    ]
    },
    {
    id: 2,
    nombre: 'María',
    habilidades: ['Python', 'SQL', 'Django'],
    proyectos: [
    { id: 3, nombre: 'Proyecto 3' },
    { id: 4, nombre: 'Proyecto 4' }
    ]
    },
    {
    id: 3,
    nombre: 'Pedro',
    habilidades: ['Java', 'Spring', 'Hibernate'],
    proyectos: [
    { id: 5, nombre: 'Proyecto 5' },
    { id: 6, nombre: 'Proyecto 6' }
    ]
    }
    ];
//hago una funcion que toma una lista y una habilidad y recorre la lista en busca de la habilidad y si encuentra lo mete en un array 
function busquedaHabilidad (list, skill){
    let chosen = [];
    for (let i =0;i<list.length;i++){
        if (list[i].habilidades.includes(skill)){
            chosen.push(list[i]); // en principio habia puesto que devolviera solo los nombres en el array
        }
    }

    return chosen;
    
}
//console.log(datos[0].habilidades.includes('JavaScript'));

console.log(busquedaHabilidad(datos, 'JavaScript'));
const desarrolladoresJavascript = busquedaHabilidad(datos, 'JavaScript');
console.log(desarrolladoresJavascript);




//lista de los proyectos en los que trabajan

//console.log(datos[0].proyectos[0].nombre);
function projects(list){
    let arrayProjects =[];
    for(let i =0;i<list.length;i++){
        for (let j=0;j<list[i].proyectos.length;j++){
            if(!arrayProjects.includes(list[i].proyectos[j].nombre)){
                arrayProjects.push(list[i].proyectos[j].nombre);
            }
        }
    }
    return arrayProjects;
}
//const array=[]
//console.log(!array.includes(datos[0].proyectos[0].nombre));
console.log(projects(datos));