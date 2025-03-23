/**
 * 1. para instalar typescript se debe de tener instalado node.js
 * 2. npm init -y
 * 3. npm i typescript --save-dev
 * 4. npx tsc --init
 *  5. Para pasar de typescript a javascript se debe de poner en la terminal npx tsc
 */

let nombre = "Jr";
// en typescript se puede declarar una variable con un tipo de dato

let nombre: string = "Jr";
// en typescript se tiene que escribir de esta manera
// string, number, boolean, any, void, null, undefined, never y object

let nombre: string = "Jr";
let edad: number = 24;
let casado: boolean = false;
let fecha: Date = new Date();
let cualquierCosa: any = "Hola";
let vacio: void = undefined;
let nulo: null = null;
let indefinido: undefined = undefined;
let nunca: never = undefined;
let objeto: object = {
  nombre: "Jr",
  edad: 24,
  casado: false,
};
let arreglo: string[] = ["Jr", "Jr"]; // arreglo de strings
let arreglo2: number[] = [1, 2, 3, 4, 5];// arreglo de numeros
let arreglo3: any[] = ["Jr", 1, true, "Jr", 1, true]; // arreglo de cualquier cosa

// si le colocas una declaracion al momento de llamarla, no le pudes poner otra (si es number, no le puedes poner string)

function saludar(nombre: string): string {
  return `Hola ${nombre}`;
}

console.log(saludar("Jr"));

//Para declarar una clase
class Persona {
  nombre: string;
  edad: number;
  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

let persona1: Persona = new Persona('Juan', 32);

//Para declarar una interfaz
/*Las interfaces son un tipo de dato que se utiliza para definir la estructura de un objeto,
es decir, las propiedades y métodos que debe tener un objeto para que sea válido. */

//Interfaz con parametros opcionales
interface IPersona {
  nombre: string;
  edad?: number; //aqui se puso un signo de interrogacion para que sea opcional (no es obligatorio)
}

let persona2: IPersona = {
  nombre: 'Juan',
  edad: 32
};

let persona3: IPersona = {
  nombre: 'Pedro',
};

//Manejar un elemeneto del DOM con TypeScript
//let elemento: HTMLElement = document.getElementById('elemento');
