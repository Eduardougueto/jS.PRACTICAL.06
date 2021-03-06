//CODIGO/FORMULA CUADRADO
    
    function perimetroCuadrado(lado) {
        return lado * 4;
    }

    function areaCuadrado(lado) {
        return lado * lado;
    }
    
// INTERACCION CON HTML - CUADRADO

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value; 

    const perimetro = perimetroCuadrado(value);
    const ResultCuadrado = document.getElementById("ResultCu");
    ResultCuadrado.innerText = "El perimetro del cuadrado mide " + perimetro + "cm";
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value; 
    
    const area = areaCuadrado(value);
    const ResultCuadrado = document.getElementById("ResultCu");
    ResultCuadrado.innerText = "El area del cuadrado mide " + area + "cm";
}

//CODIGO/FORMULA TRIANGULO
   
    function perimetroTriangulo(lado1, base) {
        return lado1 + lado1 + base;
    }

    function areaTriangulo(base, lado1) {
        const baseMit = base / 2;
        // ELEVADOS AL CUADRADO
        const baseAlCuadrado = baseMit * baseMit;
        const HipAlCuadrado = lado1 * lado1;
        // ELEVADOS AL CUADRADO
        const baseRestaHipo = HipAlCuadrado - baseAlCuadrado;
        const RaizBaseHipo = Math.sqrt(baseRestaHipo);
        const baseValue = (base * RaizBaseHipo) / 2;
        return baseValue.toFixed(2);
        // return (base * altura) / 2;
    }    
    
    

// INTERACCION CON HTML - TRIANGULO
function calcularPerimetroTriangulo() {
    //LADO 1 - 2
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value); 
    // BASE
    const inputBase = document.getElementById("InputTrianguloBase");
    const value2 = Number(inputBase.value); 
    
    const perimetro = perimetroTriangulo(value1, value2);
    const ResultTriangulo = document.getElementById("ResultTr");
    ResultTriangulo.innerText = "El perimetro del Triángulo mide " + perimetro + "cm";
}

function calcularAreaTriangulo() {
    //LADO 1 - 2
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    // BASE
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = Number(inputBase.value);
    
    const area = areaTriangulo(valueBase, value1);
    const ResultTriangulo = document.getElementById("ResultTr");
    ResultTriangulo.innerText = "El area del Triángulo mide " + area + "cm";
}

//CODIGO/FORMULA CIRCULO
        
//DIAMETRO
    
    function diametroCirculo(radio) {
        return radio * 2;
    }
//PI
    const PI = Math.PI;
// CIRCUNFERENCIA
    function perimetroCirculo(radio) {
        const diametro = diametroCirculo(radio);
        const diamePorPi = diametro * PI;
        return diamePorPi.toFixed(2);
    }
   
//AREA
    function areaCirculo(radio) {
        return (radio * radio) * PI.toFixed(2);
    }
    
        //
// INTERACCION CON HTML - TRIANGULO
function calcularPerimetroCirculo() {
    const inputC = document.getElementById("InputCirculo");
    const value = inputC.value;
    perimetro = perimetroCirculo(value);
    const ResultCirculo = document.getElementById("ResultCi");
    ResultCirculo.innerText = "El perimetro del Círculo mide " + perimetro + "cm";
}

function calcularAreaCirculo() {
    const inputC = document.getElementById("InputCirculo");
    const value = inputC.value;
    area = areaCirculo(value);
    const ResultCirculo = document.getElementById("ResultCi");
    ResultCirculo.innerText = "El area del Círculo mide " + area + "cm";
}

