// //FUNCTION A
// function calcularMediaAritmetica(lista) {
//     let sumaLista = 0;
// for (let i = 0; i < lista.length; i++) {
//     sumaLista = sumaLista + lista[i];
// }

// const promedioLista = sumaLista / lista.length;
// return promedioLista;
// }

// // FUNCTION B
// function calcularMediaAritmetica2(lista) {
//     const sumaLista = lista.reduce(
//         function (valorA = 0, nuevoE) {
//             return valorA + nuevoE;
//         }
//     );

//     const promedioLista = sumaLista / lista.length;
//     return promedioLista;
// }

// SEGUIRE UN EJEMPLO ACA ABAJO.
let list = [];

const buttonInputSalario = () =>{
    const number = parseInt(document.getElementById("InputSalario").value);
    // const arrayDeCadenas = list.split(',').map(number);
    const addNumber = list.push(number);
    const result = document.getElementById("ResultA");
    result.innerText = "Tu lista actual tiene los siguiente valores: " + list + ". Si estan bien, preciona el boton 'Calcular Promedio' ";
    // 'Tu lista actual tiene los siguientes numeros $(list). Si estan bien, preciona el boton "Calcular Promedio". ';
}

const buttonPromedio = () => {
    const valorAcumulado = (acumulador, nuevoElemento) => acumulador + nuevoElemento;
    const promedioList = list.reduce(valorAcumulado) / list.length;
    const result = document.getElementById("ResultB");
    result.innerText = "El promedio es " + promedioList;
}