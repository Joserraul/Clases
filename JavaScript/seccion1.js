//alert("Me ejecuto desde un archivo externo");
//Comentario de una sola linea
/*
  Comentario de
  varias lineas
*/

//LA CONSOLA
console.log("Hola mundo");

//VARIABLES
/*Inicializacion de una variable*/
var edad = 5;
//Utilizacion de una variable
console.log(edad);

//TIPOS DE DATOS
//Numeros
var numero = 5;
var numero_float = 5.5;
//Cadenas de texto (Strings)
var cadena = "Hola mundo!";
// var cadena = Hola mundo!; //Error
//Booleanos
var booleano = true;
// booleano = false;
//Arreglos (Arrays)
var arreglo = [1,2,3,4,5];
var frutas = ["Manzana", "Pera", "Uva"];
//Objetos
var objeto = {
  nombre: "Juan",
  edad: 25
};
var carro = {
  marca: "Toyota",
  modelo: "Corolla",
  anio: 2015
}
//Undefined
var indefinido;
//Null
var nulo = null;

//OPERADORES COMPATIVOS
//Aritmeticos
var suma = 5 + 3;
var resta = 5 - 3;
var multiplicacion = 5 * 3;
var division = 5 / 3;
//Modulo
var modulo = 5 % 2;
var exponente = 5 ** 2;

//Comparacion
var igual = 5 == "5";
var exactamente_igual = 5 === "5";
var diferente = 5 != 5;
var exactamente_diferente = 5 !== "5";
var mayor_que = 5 > 3;
var menor_que = 5 < 7;
var mayor_o_igual = 5 >= 5;
var menor_o_igual = 5 <= 8;

//investigas operadores logicos//

//Condicionales
/*
  Nos ayudan a tomar decisiones en nuestro código
*/
var edad = 18;
if (edad < 0 || edad > 130){
  console.log("Edad no valida");
} else if(edad < 18){
  console.log("Eres menor de edad");
} else if(edad >= 18){
  console.log("Eres mayor de edad");
} else {
  console.log("Edad no valida");
}