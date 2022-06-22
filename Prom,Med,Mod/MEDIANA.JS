function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
         return valorAcumulado + nuevoElemento;
     });
     const promedioLista = sumaLista / lista.length;
     return promedioLista;
    }

function calcularMediana() {
// CONECTA CON HTML
    const inputMediana = document.getElementById("InputMediana");
    const medianaValue = inputMediana.value;
// Al ser un String los valores capturados, se procede a convertir el formato a Number 
    let arrayMediana = Array.from(medianaValue.split(","), Number);
//   Ordenamos los valores de la lista desordenada mediante el metodo sort() de menor a mayor
    const listaOrdenada = arrayMediana.sort(
        (numMenor, numMayor) => numMenor - numMayor
    );
// Hallamos la mitad de la cantidad de elemento de mi lista obtenida del HTML y lo redondeamos en caso sea decimal con la funcion parseInt()
    const mitadLista = parseInt(listaOrdenada.length / 2);
    
// Creamos la funcion esPar para verificar si la lista es par o impar
    function esPar(numero) {
        if (numero % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
    
let mediana;
// Si la lista es par procedemos hallar la mediana mediante esta forma de lo contrario seguiriamos con el else
    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];
// Llamamos a la funcion calcularMediaAritmetica() con los elementos1 y elementos2 como parametros y lo guardamos como la variable mediana
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);
        mediana = promedioElemento1y2;
    } else {
        mediana = listaOrdenada[mitadLista];
    }
    // CONECTA CON HTML
    const Resultado = document.getElementById("ResultMediana");
    Resultado.innerText = "la mediana es de: " + mediana;
}






