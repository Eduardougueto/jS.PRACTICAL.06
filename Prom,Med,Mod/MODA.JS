// const lista1 = [
//     1, 2, 3, 1, 2, 3, 4, 2, 2,2,1,
// ];  
// const lista1Count = {};

// lista1.map(
//     function (elemento) {
//         if (lista1Count[elemento]) {
//             lista1Count[elemento] += 1;
//         } else {
//             lista1Count[elemento] = 1;
//         }
//     }
// );
// // SE CONVIERTE EL OBJETO EN UN ARRAY
// const lista1Array = Object.entries(lista1Count).sort(
//     function (elementoA, elementoB) {
//         return elementoA[1] - elementoB[1];
//     }
// );
// const moda = lista1Array[lista1Array.length - 1];

// SE CREA LA FUNCION QUE LO ABARCA TODO

function CalcularModa() {
    const inputModa = document.getElementById("InputModa");
    const modaValue = inputModa.value;

    let arrayValue = Array.from(modaValue.split(","), Number);

    const listCounter = {};

    arrayValue.map(function (elemento) {
        if (listCounter[elemento]) {
            listCounter[elemento] += 1;
        } else {
            listCounter[elemento] = 1;
        }
    });

    const listArray = Object.entries(listCounter).sort(function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1]; 
    });

    const moda = listArray[listArray.length - 1];

    const ResultModa = document.getElementById("ResultM");
    ResultModa.innerText = "La moda es " + moda;

}