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

//Creo la clase Personaje
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

  //El metodo para atacar recibe un objetivo
  atacar(objetivo){
    //Genero un numero aleatorio entre 0 y el ataque del personaje
    let ataque = Math.floor(Math.random() * (this.ataque + 1)) ;
    //Genero un numero aleatorio entre 0 y la defensa del objetivo
    let defensa = Math.floor(Math.random() * (objetivo.defensa + 1));
    //Calculo el daño
    let danio = ataque - defensa;
    //Si el daño es menor a 0, lo cambio a 0
    if(danio < 0){
      danio = 0;
    }
    //Imprimo el daño que se hizo
    console.log(`${this.nombre} ataca a ${objetivo.nombre} y le hace ${danio} de daño`);
    //Retorno el daño hecho
    return danio;
  }
}

class Mago extends Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad, hechizos){
    super(nombre, vida, ataque, defensa, velocidad);
    this.hechizos = hechizos;
  }

  lanzarHechizo(objetivo){
    //Seleccionar un hechizo aleatorio
    let hechizo = this.hechizos[Math.floor(Math.random() * this.hechizos.length)];
    let ataque = Math.floor((Math.random() * (hechizo.danio + 1)) );
    let defensa = Math.floor(Math.random() * (objetivo.defensa + 1));
    let danio = ataque - defensa;
    if(danio < 0){
      danio = 0;
    }
    console.log(`${this.nombre} lanza un hechizo de ${hechizo.nombre} a ${objetivo.nombre} y le hace ${danio} de daño`);
    return danio;
  }
}

class Guerrero extends Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad, armas){
    super(nombre, vida, ataque, defensa, velocidad);
    this.armas = armas;
  }

  atacarConArma(objetivo){
    let arma = this.armas[Math.floor(Math.random() * this.armas.length)];
    let ataque = Math.floor(Math.random() * (arma.danio + 1));
    let defensa = Math.floor(Math.random() * (objetivo.defensa + 1));
    let danio = ataque - defensa;
    if(danio < 0){
      danio = 0;
    }
    console.log(`${this.nombre} ataca con ${arma.nombre} a ${objetivo.nombre} y le hace ${danio} de daño`);
    return danio;
  }
}

class Arquero extends Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad, flechas){
    super(nombre, vida, ataque, defensa, velocidad);
    this.flechas = flechas;
  }

  dispararFlecha(objetivo){
    let flecha = this.flechas[Math.floor(Math.random() * this.flechas.length)];
    let ataque = Math.floor(Math.random() * (flecha.danio + 1));
    let defensa = Math.floor(Math.random() * (objetivo.defensa + 1));
    let danio = ataque - defensa;
    if(danio < 0){
      danio = 0;
    }
    console.log(`${this.nombre} dispara una flecha a ${objetivo.nombre} y le hace ${danio} de daño`);
    return danio;
  }
}

let mago1 = new Mago("Gandalf", 100, 50, 20, 10, [
  {nombre: "Fuego", danio: 120},
  {nombre: "Hielo", danio: 150}
]);

let mago2 = new Mago("Merlin", 100, 50, 20, 10, [
  {nombre: "Rayo", danio: 180},
  {nombre: "Viento", danio: 100}
]);

let guerrero1 = new Guerrero("Aragorn", 150, 70, 30, 5, [
  {nombre: "Espada", danio: 100},
  {nombre: "Hacha", danio: 110}
]);

let guerrero2 = new Guerrero("Conan", 150, 70, 30, 5, [
  {nombre: "Maza", danio: 120},
  {nombre: "Lanza", danio: 105}
]);

let arquero1 = new Arquero("Legolas", 120, 60, 20, 15, [
  {nombre: "Flecha de fuego", danio: 110},
  {nombre: "Flecha de hielo", danio: 120}
]);

let personajes = [mago1, mago2, guerrero1, guerrero2, arquero1];
let personajes_vivos = personajes;
let ronda = 1;
while( personajes_vivos.length > 1 ){
  console.log(`Ronda ${ronda}`);
  //Creo un arreglo de objetos con la velocidad de cada personaje
  let turno = [];
  // Lleno el arreglo turno con los personajes vivos y su velocidad
  for(let personaje of personajes_vivos){
    turno.push(
      {
        personaje: personaje,
        velocidad: Math.floor(Math.random() * (personaje.velocidad + 1))
      }
    );
  }
  //Organizar de mayor a menor velocidad
  turno.sort((a, b) => b.velocidad - a.velocidad);

  //Comienza la ronda de ataques
  for(let i = 0; i < turno.length; i++){
    //Seleccionar al personaje que ataca
    let atacante = turno[i].personaje;

    //Seleccionar al objetivo aleatorio
    do{
      var objetivo = personajes_vivos[Math.floor(Math.random() * personajes_vivos.length)];
    } while(atacante === objetivo);

    //Creo variable para guardar el daño
    let danio = 0;
    //Verifico si el atacante es un mago
    if(atacante instanceof Mago){
      //Creo una probabilidad de 50% para lanzar hechizo o atacar
      let probabilidad = Math.floor(Math.random() * 2);
      if(probabilidad === 0){
        danio = atacante.lanzarHechizo(objetivo);
      } else {
        danio = atacante.atacar(objetivo);
      }
    } else if(atacante instanceof Guerrero){
      // Creo una probabilidad de 50% para atacar con arma o atacar
      let probabilidad = Math.floor(Math.random() * 2);
      if(probabilidad === 0){
        danio = atacante.atacarConArma(objetivo);
      } else {
        danio = atacante.atacar(objetivo);
      }
    } else if(atacante instanceof Arquero){
      // Creo una probabilidad de 50% para disparar flecha o atacar
      let probabilidad = Math.floor(Math.random() * 2);
      if(probabilidad === 0){
        danio = atacante.dispararFlecha(objetivo);
      } else {
        danio = atacante.atacar(objetivo);
      }
    }
    //Restar la vida al objetivo
    objetivo.vida -= danio;
    console.log(`${objetivo.nombre} tiene ${objetivo.vida} de vida`);
    //objetivo.vida = objetivo.vida - danio;
    //Verificar si el objetivo murio
    if( objetivo.vida <= 0 ){
      console.log(`${objetivo.nombre} ha muerto`);
      //Eliminar al personaje del arreglo de personajes vivos
      personajes_vivos = personajes_vivos.filter(personaje => personaje !== objetivo);
    }

    //Verificar si solo queda un personaje vivo
    if(personajes_vivos.length === 1){
      console.log(`${personajes_vivos[0].nombre} ha ganado la batalla`);
      break;
    }
  }
  ronda++;
}


/*

Ejercicio: *Sistema de Gestión de Vehículos*

Descripción: Imagina que estás creando un sistema simple para gestionar vehículos 
en una pequeña empresa de alquiler de autos. El sistema necesita manejar información 
básica sobre cada vehículo y realizar operaciones de alquiler y devolución.

Requisitos:

1. Clase Vehiculo:
   - Atributos:
     - marca (string): la marca del vehículo (por ejemplo, Toyota, Ford).
     - modelo (string): el modelo del vehículo (por ejemplo, Corolla, Mustang).
     - año (int): el año de fabricación del vehículo.
     - disponible (boolean): indica si el vehículo está disponible para alquilar.
   - Métodos:
     - alquilar(): cambia el estado de disponibilidad a false si el vehículo está disponible. Si no está disponible, muestra un mensaje indicando que ya está alquilado.
     - devolver(): cambia el estado de disponibilidad a true.
     - informacion(): imprime toda la información del vehículo (marca, modelo, año, disponibilidad).

2. Clase EmpresaAlquiler:
   - Atributos:
     - flota (lista de objetos Vehiculo): lista de todos los vehículos disponibles en la empresa.
   - Métodos:
     - agregar_vehiculo(vehiculo): añade un vehículo a la flota.
     - mostrar_vehiculos_disponibles(): imprime la información de todos los vehículos que están disponibles para alquilar.
     - mostrar_vehiculos(): imprime la información de todos los vehículos en la flota.
     - buscar_vehiculo(marca, modelo): busca un vehículo en la flota según la marca y el modelo, y devuelve el objeto Vehiculo si se encuentra disponible. Si no está disponible, muestra un mensaje indicando que el vehículo no está disponible o no se encontró.
     

Ejemplo de Uso:

1. Crear algunos vehículos y añadirlos a la flota de la empresa.
2. Mostrar la lista de vehículos disponibles.
3. Alquilar un vehículo y verificar si se actualiza su estado.
4. Devolver un vehículo y verificar si vuelve a estar disponible.
*/

/**
 * @class Vehiculo - Clase para gestionar la información de un vehículo
 */
class Vehiculo {
  /**
   * @param {string} marca - Marca del vehículo
   * @param {string} modelo - Modelo del vehículo
   * @param {number} anio - Año de fabricación del vehículo
   * @param {boolean} disponible - Indica si el vehículo está disponible para alquilar (por defecto true)
   */
  constructor(marca, modelo, anio, disponible = true) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.disponible = disponible;
  }

  /**
   * @method alquilar - Cambia el estado de disponibilidad del vehículo a false si está disponible
   */
  alquilar() {
    if (this.disponible) {
      console.log(
        `Has alquilado el carro ${this.marca} ${this.modelo} del ${this.anio}`
      );
      this.disponible = false;
    } else {
      console.log(
        `El carro ${this.marca} ${this.modelo} del año ${this.anio} esta alquilado`
      );
    }
  }

  /**
   * @method devolver - Cambia el estado de disponibilidad del vehículo a true si no está disponible
   */
  devolver() {
    if (!this.disponible) {
      console.log(
        `Estas devolviendo el carro ${this.marca} ${this.modelo} del ${this.anio}`
      );
      this.disponible = true;
    } else {
      console.log(`No puedes devolver un auto que no esta alquilado`);
    }
  }

  /**
   *  @method informacion - Imprime toda la información del vehículo (marca, modelo, año, disponibilidad)
   */
  informacion() {
    /*
    console.log(this.modelo, this.marca, this.anio, this.disponible)
    console.log("Auto modelo: " + this.modelo + " marca: " + this.marca +
      " año: " + this.anio + " disponibilidad: " + this.disponible
    );
    console.log(
      `Información del vehiculo:
      \n Modelo: ${this.modelo}
      \n Marca: ${this.marca}
      \n Año: ${this.anio}
      \n Disponibilidad: ${this.disponible}`
    )
    */
    console.log(
      `
  Información del vehiculo:
  Modelo: ${this.modelo}
  Marca: ${this.marca}
  Año: ${this.anio}
  Disponibilidad: ${this.disponible ? "Disponible" : "Ocupado"}
`
    );
  }
}

/**
 * @class EmpresaAlquiler - Clase para gestionar la flota de vehiculos de una empresa de alquiler
 */
class EmpresaAlquiler {
  /**
   * @constructor
   * @param {array} flota - Lista de vehiculos disponibles en la empresa
   */
  constructor(flota = []) {
    this.flota = flota;
  }

  /**
   * @method agregarVehiculo - Añade un vehículo a la flota
   * @param {object} vehiculo - Objeto vehiculo a agregar a la flota 
   */
  agregarVehiculo(vehiculo) {
    this.flota.push(vehiculo);
  }

  /**
   * @method mostrarVehiculosDisponibles - Muestra la información de todos los vehículos que están disponibles para alquilar
   */
  mostrarVehiculosDisponibles() {
    /*
      let vehiculos_disponibles = this.flota.filter(
        (vehiculo) => vehiculo.disponible === true
      );
      for (vehiculo of vehiculos_disponibles) {
        console.log(
        `
          Información del vehiculo:
          Modelo: ${vehiculo.modelo}
          Marca: ${vehiculo.marca}
          Año: ${vehiculo.anio}
          Disponibilidad: ${vehiculo.disponible ? "Disponible" : "Ocupado"}
        `);
    */

    for (let vehiculo of this.flota) {
      if (vehiculo.disponible) {
        console.log(
          `
            Información del vehiculo:
            Modelo: ${vehiculo.modelo}
            Marca: ${vehiculo.marca}
            Año: ${vehiculo.anio}
            Disponibilidad: ${vehiculo.disponible ? "Disponible" : "Ocupado"}
        `
        );
      }
    }
  }

  /**
   * @method mostrarVehiculos - Muestra la información de todos los vehículos en la flota
   */
  mostrarVehiculos() {
    for (let vehiculo of this.flota) {
      console.log(
        `
            Información del vehiculo:
            Modelo: ${vehiculo.modelo}
            Marca: ${vehiculo.marca}
            Año: ${vehiculo.anio}
            Disponibilidad: ${vehiculo.disponible ? "Disponible" : "Ocupado"}
        `
      );
    }
  }
}

//1
let vehiculo1 = new Vehiculo("Ford", "Camaro", "1997");
let vehiculo2 = new Vehiculo("Harley-Davidson", "San Luis", "2023");
let vehiculo3 = new Vehiculo("Jeep", "Wagoneer", "2021");

let vehiculos = [vehiculo1, vehiculo2, vehiculo3];

//2
let autorent = new EmpresaAlquiler(vehiculos);
autorent.mostrarVehiculosDisponibles();

//3
autorent.flota[2].alquilar();
autorent.flota[2].informacion();



//PROYECTO DE LA SECCION 2 

/*

  1. Crea un juego de piedra papel o tijera utilizando
  funciones y ciclos.

  El juego debe permitir al usuario seleccionar una opcion
  y la computadora seleccionara una opcion aleatoria.

  Las opciones son:
  - Piedra
  - Papel
  - Tijera

  Las reglas son:
  - La piedra aplasta la tijera
  - La tijera corta el papel
  - El papel envuelve la piedra

  El juego debe de imprimir quien gano y si el usuario
  desea seguir jugando.

  El juego debe de terminar cuando el usuario seleccione
  que no desea seguir jugando.

  Ademas debes de tener un contador que indique cuantas
  partidas se han jugado, cuantas ha ganado el usuario
  y cuantas la computadora.

  Puedes utilizar la funcion prompt() para obtener la
  seleccion del usuario.

  2. Crea un juego de adivinar un numero aleatorio
  entre 1 y 100.

  El juego debe de permitir al usuario ingresar un numero
  y la computadora debe de generar un numero aleatorio
  entre 1 y 100.

  El juego debe de imprimir si el numero ingresado por
  el usuario es mayor, menor o igual al numero generado
  por la computadora.

  El juego debe de terminar cuando el usuario adivine
  el numero.

  Ademas debes de tener un contador que se reste uno cada
  vez que el usuario ingrese un numero.

  El usuario debe de tener un maximo de 6 intentos para
  adivinar el numero.

  3. Crea un programa orientado a objetos que sea un gestor
  de tareas.

  El programa debe de tener las siguientes clases:
  - Tarea
    - Propiedades: nombre, descripcion, fecha, completada

  - ListaTareas
    - Propiedades: tareas (array de tareas)
    - Metodos: Agregar tarea(tarea), Completar tarea(tarea), Eliminar tarea(tarea), 
    ver tareas()

  El programa debe de permitir al usuario agregar tareas,
  completar tareas y eliminar tareas. Ademas debe de permitir
  al usuario ver todas las tareas. 

  El programa debe de tener un menu que permita al usuario
  seleccionar una opcion.

  El programa debe de terminar cuando el usuario seleccione
  salir.

  debes usar alert() y prompt() para interactuar con el usuario.


  Fecha de entrega: 13/11/2024

  */

