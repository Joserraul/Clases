//Ejercicos para practicar la lógica

// (Facil)
var uno = !true || false; // falaso porque el  OR LOGICO quiere decir que si uno es verdadero,marcara verdadero pero el ! cambia su valor. al final es falso
var dos = false && !false; // en el termino AND si tenemos una verdadera, entonces nos arrojara, verdadero, en este caso tenemos el signo ! que cambia el false por uno verdadero pero el otro es falso . resultado falso 
var tres = true && !false; // esta si da verdadera

//(Medio)
var cuatro = (5 === 5) || (!true);  //es verdadero porque dentro del 5 si son iguales pero en el otro es falso, en realidad estamos viendo el resultado de amnbos y comparandolo, como es OR LOGiCy uno es verdadero, marca verdadero.
var cinco = (!0) || (5 < 0); //esto marca falso, porque ninguno de los valores representa  algo verdadero
var seis = (3 > 4) && (!0); //falso porque es and y los dos deben ser verdadeos 

//Avanzado
var siete = ( ((false || true) && (!false && true) )) || (true && false) //true
var ocho = (6 === 3+3) && (9/3 >= 3); //true
var nueve = (!(!false) || ( ("1" == 1)) && (!false === true) ); //true

//Hardcore
var diez = !(!true) === !( !( 5 >= 5 ) );
var once = !( true && (!true === !( !(8 === 4*2) )) );

//Ultra-Hardcore
var doce = !( true && (!true === !( !(16 === (4*2) + 8))) ) !== (false);

//Leyenda
var trece = !(((!(!(10 / 5 == "2") === false) != false) === ((5 * 5) <= (100 / 4))) && (!((1 + 1) !== (10 / 5)) !== (true)));


//resultado
console.log(uno);
console.log(dos);
console.log(cuatro);
console.log(cinco);


/*
Crea tres variables, numero1, numero2 y operador y asignales un valor
  Crea una condicion que verifique si el operador es +, -, *, /, % o **.
  Dependiendo del operador, realiza la operacion correspondiente con los dos numeros
  e imprime el resultado en la consola.

  Crea una variable llamada dia y asignale un valor de 1 a 7
  Crea una condicion que imprima el dia de la semana correspondiente al numero
  que tenga la variable dia.

  Nota: En ambos casos debes de evaluar que hacer en caso de que los valores
  no sean validos.

  Fecha de entrega: 22/10/2024
*/

var numero1 = 10;
var numero2 = 5;
var operador = "*";
if (operador == "+") {
  console.log(numero1 + numero2);
} else if (operador == "-"){
  console.log (numero1 - numero2);
} else if (operador == "*"){
  console.log (numero1 * numero2);
} else if (operador == "/"){
  console.log (numero1 / numero2);
} else if (operador == "%"){
  console.log (numero1 % numero2);
} else if (operador == "**"){
  console.log ($numero1 ** numero2);
} else {
  console.log("operador no valido")
}

//resultado
var resultado = 12 + 5;
  console.log(resultado)
var resultado = 4 / 2;
  console.log(resultado)
var resultado = 2 * 4 ;
  console.log(resultado)
var resultado = 4 - 4;
  console.log(resultado)
var resultado = 6 ** 3;
  console.log(resultado)

var resultado = 300 - 250;
  console.log(resultado)
var resultado = 12 + 12;
  console.log(resultado)


//SEGUNDO EJERCICIO.

var dia = 8;
if (dia == 1){
  console.log("Lunes");
} else if (dia == 2){
  console.log("Martes");
} else if (dia == 3){
  console.log("Miercoles");
}else if (dia == 4){
  console.log("Jueves");
}else if (dia == 5){
  console.log("Viernes");
}else if (dia == 6){
  console.log("Sabado");
}else if (dia == 7){
  console.log("Domingo");
}else {
  console.log("Are you dead");
}

function calculadora2(numero1, numero2, operador = "invalido"){
  if (operador == "+"){
    console.log(numero1 + numero2);
  } else if (operador == "-"){
    console.log(numero1 - numero2);
  } else if (operador == "*"){
    console.log(numero1 * numero2);
  } else if (operador == "/"){
      console.log(numero1 / numero2);
  } else if (operador == "**"){
    console.log( numero1 ** numero2);
  }else if (operador == "%"){
    console.log(numero1 % numero2);
  } else {
    console.log("Invalido");
  }
}

calculadora2(2, 1, "+");
calculadora2(4, 5, "-")
calculadora2(8, 9, "**")


function semana(dia = "are you dead"){
    if (dia == "1"){
      console.log("Lunes");
    } else if (dia == "2"){
      console.log("Martes");
    } else if(dia == "3"){
      console.log("Miercoles");
    } else if (dia == "4"){
      console.log("Jueves");
    } else if  (dia == "5"){
      console.log("Viernes");
    } else if (dia == "6"){
      console.log("Sabado");
    }else if (dia == "7"){
      console.log("Domingo");
    } else{
      console.log("are you dead")
    }
}

semana(4);

/*
  Ejercicios de funciones con retorno y sin retorno. Debes determinar que imprime
  cada uno de los console.log

  function suma(numero1, numero2){
    return numero1 + numero2;
  }
  
  console.log(suma(10, 20)); --> 30

  function resta(numero1, numero2){
    console.log(numero1 - numero2); --> -10
  }
  
  console.log(resta(10, 20)); --> Undefined

  function hallarAreaTriangulo(base, altura){
    if(base <= 0 || altura <= 0){
      return "Los valores deben ser mayores a 0";
    } else if(base === altura){
      return "La base y la altura no pueden ser iguales";
    } else {
      console.log((base * altura) / 2); --> 25
    }
  }

  console.log(hallarAreaTriangulo(10, 5)); --> Undefined

  function hallarAreaCirculo(radio){
    if(radio <= 0){
      return "El radio debe ser mayor a 0";
    } else if(typeof radio !== "number"){
      return "El radio debe ser un número";
    } else {
      if(radio <= 5){
        return "El radio debe ser mayor a 5";
      }
      console.log(3.14 * (radio * radio));
    }
  }

  console.log(hallarAreaCirculo(2)); --> "El radio debe ser mayor a 5"
*/

function saludar(nombre){
  console.log("hola" + nombre)
 }
 console.log(saludar("juan"))

/*
  Ejercicios de recursividad
  1. Crea una función que imprima la potencia de un número elevado a otro número.
  2. Crea una función que reciba un número y retorne el factorial de ese número.
  3. Crea una función que imprima la sucesion de Fibonacci hasta el número que se le pase como parametro.
*/

//1
function elevar(numero, potencia) {
  if (potencia === 0) {
    return 1;
  }
  return numero * elevar(numero, potencia - 1);
}

console.log(elevar(2, 3)); //8

//2

function factorial(numero) {
  if (numero === 0) {
    return 1;
  }
  return numero * factorial(numero - 1);
}

console.log(factorial(5)); //120

//3
function fibonacci(numero,resultado_anterior = 0, resultado_actual = 1) {
  if (numero === 0) {
    return;
  }
  if(resultado_actual < numero){
    console.log(resultado_actual);
    fibonacci(numero, resultado_actual, resultado_anterior + resultado_actual);
  }
}

fibonacci(50); //0, 1, 1, 2, 3, 5, 8, 13, 21, 34



function elevar2(numeor, potencia){
  if (potencia === 0){
    return 1;
  }
  return numero * elevar (numero, potencia - 1)
}
 console.log(elevar(4, 2));

 //Ejercicios de metodos de strings
//1. Crea una función que reciba un string y devuelva la cantidad de letras que tiene.
//2. Crea una función que reciba un string y devuelva la cantidad de palabras que tiene.
//3. Crea una función que reciba un string y devuelva el string invertido. (Hola -> aloH) (Utiliza recursividad)
//4. Verifica si un string es un palindromo (se lee igual de izquierda a derecha que de derecha a izquierda)

function palabra(letras){
  if(letras === ""){
    return 0;
  } else{
      return letras.length;
  }
}

console.log(palabra("Mientras mas ejercite mejor")) //27

//ejercicio 2

function palabra2(letra){
  if (typeof letra !== "string"){
  return "el valor debe ser string"
  }
  return letra.split(" ").length;
  }


console.log(palabra2("Mientras mas ejercite mejor"))


//ejercicio 3

function textoreversa(texto){
  if (texto === ""){
    return "";
  } else{
    return textoreversa(texto.slice(1)) + texto[0];
  }
}

console.log(textoreversa("pudin"));

//ejercicio 4 

function esPalindromo(texto) {
  const textoInvertido = texto.split("").reverse().join("");
  return texto === textoInvertido;
}

console.log(esPalindromo("ama"));
console.log(esPalindromo("dinero"));

/*
  Ejercicios de selección de datos de un array de objetos
  1. Imprime el nombre de la marca de manzanas que proviene de Chile
  2. Imprime el precio de la manzana Fuji
  3. Imprime el array de productos de la marca de manzanas que proviene de Chile
  4. Imprime el nombre de la marca de pollo que proviene de Brasil
  5. Imprime el precio del pollo entero
  6. Imprime el proveedor (objeto) de leche de méxico
  7. Imprime la vida util del queso de Oveja
*/

/*
  Ejercicios de metodos de arrays
  1. Crea una función que reciba un array de numeros y devuelva la suma de todos los numeros.
  2. Crea una función que reciba un array de numeros y devuelva el promedio de todos los numeros.
  3. Crea una función que reciba un array de numeros y devuelva el numero mayor.
  4. Crea una función que reciba un array de numeros y devuelva el numero menor.
  5. Crea una función que reciba un array de numeros y devuelva un array con los numeros pares.
  6. Crea una función que reciba un array de numeros y devuelva un array con los numeros impares.
  7. Crea una función que reciba un array de ciudades y devuelva un array con las ciudades que empiezan con la letra "M".
  8. Crea una función que reciba un array de nombres y verifique si el nombre "Juan" se encuentra en el array y devuelva su posicion.
*/

/*
  Ejercicios de ciclos
  1. Crea un ciclo que imprima los numeros del 1 al 100.
  2. Crea un ciclo que permita imprimir cada uno de los valores de la variable compra.
  3. Crea un ciclo que imprima los numeros pares del 0 al 100 de dos en dos. (2, 6, 10, 14, 18, ...)
  4. Realiza el ejercicio de Fibonacci utilizando un ciclo. (Debes imprimir solo los primeros 15 valores)
*/

/*
  Realiza un videojuego utilizando clases y herencia.
  Este videojuego debe tener las siguientes clases:
  - Personaje
    - Propiedades: nombre, vida, ataque, defensa, velocidad
    - Metodos: Atacar, Saludar
  - Mago
    - Propiedades: hechizos (array de hechizos, cada hechizo tiene un nombre y un daño)
    ejemplo de hechizo: {nombre: "Fuego", daño: 50}
    - Metodos: Lanzar hechizo (seleccionar un hechizo aleatoriamente)
  - Guerrero
    - Propiedades: armas (array de armas, cada arma tiene un nombre y un daño)
    - Metodos: Atacar con arma (seleccionar un arma aleatoriamente)
    ejemplo de arma: {nombre: "Espada", daño: 30}
  - Arquero
    - Propiedades: flechas (array de flechas)
    - Metodos: Disparar flecha

  Debes de crear 5 personajes, 2 magos, 2 guerreros y 1 arquero.
  Cada personaje debe de tener una vida, un ataque diferente, una defensa, velocidad aleatoria.

  Crea un loop que permita a cada personaje atacar a otro personaje.
  Al momento de realizar un ataque, el personaje que fue atacado debe de defenderse.

  Cada vez que un personaje ataque a otro, se debe de imprimir el nombre del personaje que ataca,

  Para calcular el daño que un personaje recibe se debe utilizar la siguiente formula:
  Daño = (%Ataque del atacante) - (%Defensa del atacado)

  Nota: El daño no puede ser menor a 0, y el ataque y defensa es un numero aleatorio entre
  0 y el valor de ataque o defensa del personaje.

  Cada vez que un personaje ataque a otro, se debe de imprimir el daño que recibe el personaje atacado
  y quien ataca y quien es el atacado.
  
  Cuando un personaje ataca a otro, cada personaje debe atacar una vez al menos (Rondas),
  sin embargo, el orden de cada ronda se determina aleatoriamente imprimiendo un numero
  entre 0 y su velocidad.

  Cuando la vida de un personaje llega a 0, se debe de imprimir que el personaje ha muerto.
  y no puede seguir atacando.

  Al final solo debe de quedar un personaje en pie.

  Y debes imprimir un mensaje diciendo quien ha ganado.

  Cada personaje realizara una acción aleatoria, es decir. Aleatoriamente puede atacar (de forma normal),
  atacar con un hechizo o atacar con un arma. (Según el tipo de personaje).

  Además, a quien ataca también se debe de seleccionar aleatoriamente.

  Puedes utilizar metodos como Math.random() para seleccionar aleatoriamente un numero.

  Math.random devuelve un numero entre 0 y 1, si quieres un numero entre 0 y 10, debes de multiplicar
  el resultado por 11.

  Math.floor() redondea un numero decimal hacia abajo. Es importante porque Math.random() devuelve
  numeros decimales.

  Ejemplo:
  Math.floor(Math.random() * 10) //Devuelve un numero entre 0 y 9

  Opcional:
  - Que cada personaje tenga una habilidad especial que se pueda activar una vez por juego.
  - Que cada personaje tenga una probabilidad de esquivar un ataque.
  - Que cada personaje pueda tener items, estos pueden aumentar sus estadisticas o incluso curar al personaje


  Fecha de entrega: 04/11/2024*/

  //ejercios 

/*class Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad){
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
    this.defensa = defensa;
    this.velocidad = velocidad;
  }
  atacar(objetivo){
    let dano = this.ataque - objetivo.defensa;
    dano = dano > 0;
    objetivo.vida -= dano;
    return `atacare con ${this.ataque} a ${obetivo.nombre} y causa ${dano} de daño`;}

  saludar(){
    return `Hola, mi nombre es ${this.nombre} y no puedes vencerme porque mi velocidad es de ${this.velocidad}`;
  }
}

class Mago {
  constructor(nombre, vida, ataque, defensa, velocidad){
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
    this.defensa = defensa;
    this.velocidad = velocidad;
    super(nombre, vida, ataque, defensa, velocidad)
    this.hechizos ["fuego", "Hielo"]
  }

  tipoDeHechizo(nombre, dano){
    const{nombre: nombre, dano: dano};
    this.hechizos.push = [hechizo]
  }

  LibroDeHechizo(objetivo){
    if (this.hechizos.length === 0){
      return `Este Mago no conoce hechizos para lanzar`;
    }
  }

  const hechizo = this.hechizos [Math.floor(Math.random() * this.hechizo.length)];
        console.log(`${this.nombre} lanza el hechizo ${hechizo.nombre} a ${objetivo.nombre}, causando ${hechizo.daño} de daño.`);

}

let mago3 = new Personaje ("juan", 100, 50, 200, 40);
let mago2 = new Personaje ("juan", 100, 50, 200, 40);
mago3.tipoDeHechizo("fuego", 40);
mago2.tipoDeHechizo("hielo", 40);

mago3.atacar(mago2);*/
//--------------------------------------------------------------------------------------------------------------------------
// ejercicio del profesor

class Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad){
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
    this.defensa = defensa;
    this.velocidad = velocidad;
  }

  saludar(clase){
    return `Hola soy ${this.nombre}, un ${clase}`;
  }

  atacar(objetivo){
    let ataque = Math.floor(Math.random() * this.ataque);
    let defensa = Math.floor(Math.random() * objetivo.defensa);
    let danio = ataque - defensa;
    if(danio < 0){
      danio = 0;
    }
    objetivo.vida -= danio;
    console.log (`${this.nombre} ataca a ${objetivo.nombre} y le hace ${danio} de daño`);
    return danio;
  }
}

class Mago extends Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad, hechizos){
    super(nombre, vida, ataque, defensa, velocidad);
    this.hechizos = hechizos;
  }

  lanzarHechizo(objetivo){
    let hechizo = this.hechizos[Math.floor(Math.random() * this.hechizos.length)];
    let danio = math.floor(math.random() * hechizo.danio);
    console.log(`${this.nombre} lanza un hechizo de ${hechizo.nombre} a ${objetivo.nombre} y le hace ${danio} de daño`);
    return danio;
  }
}