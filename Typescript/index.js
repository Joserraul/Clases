"use strict";
/**
 * 1. para instalar typescript se debe de tener instalado node.js
 * 2. npm init -y
 * 3. npm i typescript --save-dev
 * 4. npx tsc --init
 */
let nombre = "Jr";
// en typescript se puede declarar una variable con un tipo de dato
let nombre = "Jr";
// en typescript se tiene que escribir de esta manera
// string, number, boolean, any, void, null, undefined, never y object
let nombre = "Jr";
let edad = 24;
let casado = false;
let fecha = new Date();
let cualquierCosa = "Hola";
let vacio = undefined;
let nulo = null;
let indefinido = undefined;
let nunca = undefined;
let objeto = {
    nombre: "Jr",
    edad: 24,
    casado: false,
};
let arreglo = ["Jr", "Jr"]; // arreglo de strings
let arreglo2 = [1, 2, 3, 4, 5]; // arreglo de numeros
let arreglo3 = ["Jr", 1, true, "Jr", 1, true]; // arreglo de cualquier cosa
// si le colocas una declaracion al momento de llamarla, no le pudes poner otra (si es number, no le puedes poner string)
function saludar(nombre) {
    return `Hola ${nombre}`;
}
console.log(saludar("Jr"));
//Para declarar una clase
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
let persona1 = new Persona('Juan', 32);
let persona2 = {
    nombre: 'Juan',
    edad: 32
};
let persona3 = {
    nombre: 'Pedro',
};
//Manejar un elemeneto del DOM con TypeScript
//let elemento: HTMLElement = document.getElementById('elemento');
