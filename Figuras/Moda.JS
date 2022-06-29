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