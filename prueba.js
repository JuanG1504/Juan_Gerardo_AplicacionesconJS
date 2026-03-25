const array=[
    {id:1,name:'juan', matematicas:80, ingles:90, fisica:70},
    {id:2,name:'pedro', matematicas:85, ingles:88, fisica:75},
    {id:3,name:'maria', matematicas:90, ingles:92, fisica:85},
    {id:4,name:'luis', matematicas:75, ingles:80, fisica:80},
    {id:5,name:'ana', matematicas:88, ingles:95, fisica:88}
]

//crear un nuevo arreglo con los nombres y promedios
const promedios=array.map(estudiante=>{
    // const promedio=Math.round((estudiante.matematicas+estudiante.ingles+estudiante.fisica)/3)
    const promedio=((estudiante.matematicas+estudiante.ingles+estudiante.fisica)/3).toFixed(2)
    return {name:estudiante.name, promedio:promedio}
})
console.log(promedios)


function generarListaHTML(datos) {
    const items = datos.map(est => {
        const promedio = (est.matematicas + est.ingles + est.fisica) / 3;
        return `<li>
            Matemáticas: ${est.matematicas} 
            Inglés: ${est.ingles} 
            Física: ${est.fisica}
            Promedio: ${promedio.toFixed(2)}
        </li>`;
    }).join('');

    return `<ul>
        ${items}
    </ul>`;
}

const listaHTML = generarListaHTML(array);
console.log(listaHTML);
