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
    alert( "El perimetro del cuadrado mide " + perimetro + "cm");
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value; 
    
    const area = areaCuadrado(value);
    alert( "El area del cuadrado mide " + area + "cm");
}

//CODIGO/FORMULA TRIANGULO
   
    function perimetroTriangulo(lado1, lado2, base) {
        return lado1 + lado2 + base;
    }

    function areaTriangulo(base, altura) {
        return (base * altura) / 2;
    }    
    
// INTERACCION CON HTML - TRIANGULO
function calcularPerimetroTriangulo() {
    //LADO 1
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value); 
    // LADO 2
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value); 
    // BASE
    const inputBase = document.getElementById("InputTrianguloBase");
    const value3 = Number(inputBase.value); 
    
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert( "El perimetro del triangulo mide " + perimetro + "cm");
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = inputBase.value;
    const inputAltura = document.getElementById("InputTrianguloAltura");
    const valueAltura = inputAltura.value;
    const area = areaTriangulo(valueBase, valueAltura);
    alert( "El area del triangulo mide " + area + "cm");
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
        return diametro * PI;
    }
   
//AREA
    function areaCirculo(radio) {
        return (radio * radio) * PI;
    }
    
        //
// INTERACCION CON HTML - TRIANGULO
function calcularPerimetroCirculo() {
    const inputC = document.getElementById("InputCirculo");
    const value = inputC.value;
    perimetro = perimetroCirculo(value);
    alert( "El perimetro del circulo mide " + perimetro + "cm");
}

function calcularAreaCirculo() {
    const inputC = document.getElementById("InputCirculo");
    const value = inputC.value;
    area = areaCirculo(value);
    alert( "El area del circulo mide " + area + "cm");
}

