function sumar(a: number,b: number): number{
    return a+b;
}

const resultado = sumar(20,10);
console.log(resultado);

//Funcion flecha o Arrow Functions

const sumarArrow = (a: number, b: number): number => {
   return a+b;
}

function multiplicar(numero1: number,  numero2?: number, base: number =2): number{
   return numero1 * base;
}

const result = multiplicar(10,0,2);