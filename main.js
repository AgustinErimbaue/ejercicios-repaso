//Crea una función multiplicacion que espere dos parámetros a y b y que devuelva la multiplicación de los mismos.
function multiplicacion(a, b) {
    return a * b
}

console.log(multiplicacion(2, 2));


//Crea un programa que pida al usuario su edad y, dependiendo de la misma, muestre por consola uno de los siguientes mensajes: "Eres menor de edad", "Eres mayor de edad" o "Eres un adulto mayor". Debes utilizar un condicional if/else.

//let age = parseInt(prompt('Ingrese su edad'))

//age >= 18 ? console.log('eres mayor de edad') : console.log('eres menor de edad');



//Crea la función sumaTresNumeros que reciba tres números como argumento y devuelva la suma de los mismos. Si alguno de los argumentos no es un número, debe devolver el string "Debo ser ejecutada con números".
function sumaTresNumeros(a, b, c) {
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
        return (a + b + c)
    } else {
        return ('Debo ser ejecutada con numeros');
    }
}



//Crea la función primerosTresCaracteres que reciba un string como argumento y devuelva los tres primeros caracteres del mismo. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string". Si el string tiene menos de tres caracteres, debe devolver el string completo.

function primerosTresCaracteres(palabra) {
    if (typeof palabra !== 'string') {
        return ('Debo ser ejecutada con string')
    } else if (palabra.length < 3) {
        return (palabra)
    } else if (palabra) {
        return palabra.substring(0, 3)
    }
}

console.log(primerosTresCaracteres('agustin'));

//Crea la función getPrecioMostrarIVA para que devuelva una cadena de texto con formato precio con dos decimales y con el IVA ya incluido. Para 2 debería devolver 2.42 € (suponiendo un IVA del 21%). Si la función no recibe un número debería devolver devolver 'No es un formato correcto'.

function getPrecioMostrarIVA(precio) {
    let precioConIva = precio * 1.21
    if (typeof precio !== "number") {
        return 'No es un formato correcto'
    } else {
        let decimales = precioConIva.toFixed(2)
        let convertir = decimales.toString()
        return `${convertir} \u20AC`
    }
}

console.log(getPrecioMostrarIVA());


/*Crea la función penultimoCaracter que reciba un string como argumento y devuelva el penúltimo carácter del mismo. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string". Si el string tiene menos de dos caracteres, debe devolver el primer carácter.*/

function pemultimoCaracter(palabra) {
    if (typeof palabra !== 'string') {
        return 'Debo ser ejecutada con un string'
    } else {
        return palabra[palabra.length - 2]
    }

}

console.log(pemultimoCaracter('Agustin'));



/*Crea la función potencia que acepte como argumento dos números y devuelva el resultado de elevar el primer número a la potencia del segundo número.*/

function potencia(a, b) {
    return a ** b;
}

console.log(potencia(2, 2));

//Ejercicio  DOM

//Llama a ese botón en tu archivo js y muestralo por consola.
const btn = document.querySelector('.btn');
console.log(btn);


//Crea una función que cuando se ejecute muestra un alert que diga “Hola”.

function saludo(e) {
    e.preventDefault();
    alert('hola')
}




//addEventListener. Implementa que cuando el usuario haga clic en el botón se ejecute la función que habías creado.
btn.addEventListener('click', saludo)
