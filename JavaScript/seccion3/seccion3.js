// ES6 (map, arrows functions, spread)

/*

ES6 (o ECMAScript 2015) introdujo nuevas características en JavaScript
para escribir código más limpio y conciso.

map permite transformar elementos de
un arreglo sin modificar el original.

Las arrow functions (funciones de flecha) son una forma abreviada de escribir funciones
y manejan el contexto (this) de manera diferente.

El spread operator (...) permite expandir elementos de un arreglo u objeto, facilitando
la copia y combinación de datos.

*/

//Map

const numbers = [[14,24,34,68], 2, 3, 4, 5,]

const newArray = numbers[0].map(number => number * 2);

console.log(newArray);

//spread operator

/* 

Es un operador que permite expandir elementos de un array, realizando una copia
del array original sin modificarlo y sin perder sus elementos, y agregando nuevos
valores

*/

//Ejemplo 1

const moreNumbers = [...numbers, 6, 7, 8, 9, 10];

console.log(moreNumbers);

//Ejemplo 2 (Objetos)

const User = {
  name: "Delvis",
  age: 23
}

const updatedUser = { ...User, country: "Venezuela"}

console.log(updatedUser);

//Ejemplo 3 (Arreglos bidimensionales)

const numbersBidimensionales =[
  [1, 2, 3],
  [4, 5, 6],]

const newNumbersBidimensionales = [...numbersBidimensionales, [7, 8, 9]];

console.log(newNumbersBidimensionales);

const esteSiDefinitivoTesisV5EstaSi = [newNumbersBidimensionales, [10, 11, 12]];

console.log(esteSiDefinitivoTesisV5EstaSi);


//Desestructuracion

/* 

Permite extraer elementos de un objeto u array y asignarlos a variables
de una manera mas directa

*/

//Para Objetos

const person1 = {
  names: "Delvis",
  age: 23,
  country: "Venezuela",
  city: "Caracas"
}

//Forma convencional de extraer propiedades de un objeto

const person1Name = person1.names;

const person1Age = person1.age;

console.log(person1Name);

//Desestructuracion

const {names, age, country, city} = person1; //Extrae las propiedades del objeto person1 y las asigna a las variables

//Para Arrays

const colors =["red", "green", "blue", "yellow"];

const [color1, color2, color3, color4] = colors;

console.log(color1);

//En funciones

function IntroduceMe({names}) {
  console.log(`Hola, soy ${names}, el desarrollador de este sitio web`);
}

IntroduceMe(person1);

//DOM

/* 

El "DOM" (Document Object Model o *Modelo de Objeto del Documento*), también conocido
como árbol de elementos, es una representación en forma de árbol de la estructura de
un documento HTML.

Cada nodo en el árbol de elementos representa un elemento HTML en la página web.

El árbol de elementos comienza con el elemento raíz, que es "document", y luego se
descompone en elementos hijo, nietos, bisnietos, etc. Cada elemento tiene
propiedades, como id, class, name, value, etc... que pueden ser accedidas mediante 
selectores y manipuladas con JavaScript.

*/

//Ejemplo de uso de DOM

//Crear un nuevo elemento del DOM

const newDiv = document.createElement("div")

//Propiedades de un elemento del dom manipulables desde js

//innerHTML: Permite insertar HTML dentro del elemento
newDiv.innerHTML = `<h1>Esto es un nuevo div</h1>`

//className: Permite cambiar la clase del elemento
newDiv.className = "Button"

//id: Permite cambiar el id del elemento
newDiv.id = "newDiv"

//style: Permite cambiar el estilo del elemento (usando estilos en linea)
newDiv.style.color = "red"

//innerText: Permite cambiar el texto del elemento
newDiv.innerText = "Esto es un parrafo"

//document.body: Permite acceder al cuerpo del documento en este caso el body
//appendChild: Permite agregar un elemento hijo al elemento padre
document.body.appendChild(newDiv)

//Selectores

/* 

Los selectores permiten acceder a elementos específicos
en el DOM según sus atributos (id, class, tag, name). Seleccionar
elementos es esencial para aplicar estilos, manipular contenido o
responder a eventos específicos en una página web.

*/

//Por el nombre de la etiqueta

const h1 = document.querySelector("h1")

h1.innerText = "Esto es un h1"

h1.className = "Tittle"

// Otras formas de seleccionar elementos por el nombre de la etiqueta

const h1 = document.querySelector("h1")

const h1s = document.querySelectorAll("h1") 


//Por la clase

const button = document.getElementsByClassName("Button")

button[0].innerText = "Esto es un boton"

//Por id

const container = document.getElementById("principal")

container.className = "Container"

//Seleccionar por ID con querySelector 

const container2 = document.querySelector("#principal")

//Todos los elementos de una clase

const buttons = document.querySelectorAll(".Button")

//aplicar cambios a todos los elementos seleccionados arriba
buttons.forEach((button, index) => {
  button.innerText = `Esto es el boton ${index + 1}`
})

//Eventos

/* 

Los eventos son la manera en la cual JavaScript controla las acciones de los visitantes
y define el comportamiento de la página cuando estos se produzcan.

Para entender los eventos es necesario conocer algunos conceptos básicos:

-Evento: Es algo que ocurre. Generalmente los eventos ocurren cuando el usuario
interactúa con el documento, pero podrían producirse por situaciones ajenas
al usuario, como el caso en el que una imagen no esté disponible.

-Tipo de evento: Es el tipo del suceso que ha ocurrido, por ejemplo, un clic sobre 
un botón o el envío de un formulario. Cada tipo de elemento de la página ofrece diversos
tipos de eventos de JavaScript.

-Manejador de evento: Es el comportamiento que nosotros podemos asignar como respuesta
a un evento. Se especifica mediante una función en JavaScript, que se asocia a un tipo de
evento en concreto. Una vez asociado el manejador a un tipo de evento sobre un elemento
de la página, y cada vez que ocurre ese tipo de evento sobre ese elemento en concreto, se
ejecutará el manejador de evento asociado.

*/

const goodButton = document.querySelector("#buton-bueno")

goodButton.addEventListener("click", () => {
  console.log("Presionaste el boton bueno")
})

/* 

Para el profesor Juan: Quedamos por la practica de eventos y manejo de escucha de 
eventos

*/

function saludar(){
  alert("Hola desde la sección 3");
}
let boton = document.getElementById("boton");
/*
  Programación orientada a eventos
  Consta de la creación de un evento y la asignación de una función a dicho evento
  En este caso, se asigna la función saludar al evento click del botón
*/
boton.addEventListener("click", saludar);
let input = document.getElementById("input");
//Configurar que el evento se ejecute cuando presiono la tecla "Enter"
input.addEventListener("keydown", function(event){
  if(event.key == "Enter"){
    saludar();
  }
});
let videos = [
  {
    titulo: "Video 1",
    duracion: 30
  },
  {
    titulo: "Video 2",
    duracion: 40
  },
  {
    titulo: "Video 3",
    duracion: 50
  }
]
/**
 * Input de búsqueda
 */
let search = document.getElementById("search");
/**
 * Botón de búsqueda
 */
let searchButton = document.getElementById("searchButton");
/**
 * @function buscarVideo
 * @description Busca un video en el array de videos
 * @returns {void}
 */
function buscarVideo(){
  let searchValue = search.value;
  let result = videos.filter(video => video.titulo == searchValue);
  if(result.length > 0){
    alert("Video encontrado: " + result[0].titulo);
  } else {
    alert("Video no encontrado");
  }
}
/**
 * Ejecutar función si se hace click en el botón
 */
searchButton.addEventListener("click", buscarVideo);
/**
 * Ejecutar funcion si se presiona enter
 */
search.addEventListener("keydown", function(evento){
  if(evento.key == "Enter"){
    buscarVideo();
  }
});
/**
 * Programación funcional
 * Consta de la creación de funciones que reciben otras funciones como parámetros
 * En este caso, se crea una función que recibe un array y una función de filtrado
 */
/**
 * @function filtrarVideos
 * @description Filtra un array de videos según un criterio
 * @param {Array} videos
 * @param {Function} filtro
 * @returns {Array}
 */
function filtrarVideos(videos, filtro){
  return videos.filter(filtro);
}
/**
 * @function validarLongitudArray
 * @description Valida si un array tiene una longitud mayor a 0
 * @param {Array} array
 * @returns {Boolean}
 */
function validarLongitudArray(array){
  return array.length > 0;
}
/**
 * @function imprimirResultado
 * @description Imprime el resultado de la búsqueda
 * @returns {void}
 */
function imprimirResultado(){
  let result = filtrarVideos(videos, video => video.titulo == search.value);
  if(validarLongitudArray(result)){
    alert("Su video fue encontrado");
  } else {
    alert("No se encontró ningún video");
  }
}
/**
 * Crea una calculadora utilizando
 * - Programación orientada a eventos
 * - Programación funcional
 * - Programación orientada a objetos
 * 
 * Nota: La programación orientada a eventos debe tener interfaz gráfica
 */