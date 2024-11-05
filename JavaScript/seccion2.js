//SCOPE (Alcance)
//Variable global
var nombre = "Juan";
//Variable local
let apellido = "Perez";
//Constante (no puede ser reasignada, alcanza el scope global)
const PI = 3.1416;

//Puedo cambiarle el valor
nombre = "Pedro";
//No puedo cambiarle el valor
//PI = 3.14;

//Alcance
if (true) {
  //variable local (solo se puede acceder dentro del bloque)
  let numero1 = 16;
  //variable global (se puede acceder desde cualquier parte)
  var numero2 = 20;
}

//console.log(numero1); //Error
console.log(numero2);
/*
  Si se declara una variable let fuera de todos los bloques
  se puede acceder a ella desde cualquier parte del código
  let numero3 = 30;
*/
if(true){
  if(true){
    let local = "Hola, soy local";
  }
  //La variable local solo se puede acceder dentro del
  //bloque del que fue declarada
  //console.log(local) error
}

//Funciones
/*
  Nos permiten reutilizar un bloque de codigo,
  son similares a los MIXINS que hemos visto en SASS
*/

//Funcion sin parametros
//Declaramos la función
function saludar(){
  console.log("Hola, soy una función");
}

//Llamamos a la función (Utilizamos la función)
saludar();
saludar();
saludar();

//Funcion con parametros
function saludarPersona(nombre = "Desconocido", edad = 0){
  console.log("Hola, soy " + nombre + " y tengo " + edad + " años");
}

saludarPersona("Juan", 20);
saludarPersona("Pedro");
saludarPersona("Maria");
saludarPersona();


//Funcion con retorno
function sumar(numero1 = 0, numero2 = 0){
  return numero1 + numero2;
}

console.log(sumar(10, 20));
var resultado = sumar(30, 40);

// RECURSIVIDAD (una funcion que se llama a asi misma)

//aqui lo que hace, es ejecutarse a ella misma pero sumando el numero que ya tiene. es decir que en "contar" va a sumar hasta el infinito...
function contar(numero){
  if(numero == 0){
    return;
  }
console.log(numero);
contar(numero + 1);
}

contar(1);

//para que no se rompa, ya que la pc no va a cargarlo hasta el infinito

function contar2(numero){
  if(numero >= 100){
    return;
  }
  console.log(numero);
  contar2(numero + 1);
}

contar2(0);

/*
clase del profesor, esta es la parte de recursividad
*/

function contar(numero) {
  if (numero >= 100) {
    return;
  }
  console.log(numero);
  contar(numero + 1);
}

contar(0);

function sumar(numero1 = 0, numero2 = 0) {
  return numero1 + numero2;
}

function restar(numero1 = 0, numero2 = 0) {
  return numero1 - numero2;
}

function multiplicar(numero1 = 0, numero2 = 0) {
  return numero1 * numero2;
}

function dividir(numero1 = 0, numero2 = 0) {
  return numero1 / numero2;
}

//Funciones dentro de funciones
function calculadora(numero1 = 0, numero2 = 0, operacion = "sumar") {
  if (operacion === "sumar") {
    return sumar(numero1, numero2);
  } else if (operacion === "restar") {
    return restar(numero1, numero2);
  } else if (operacion === "multiplicar") {
    return multiplicar(numero1, numero2);
  } else if (operacion === "dividir") {
    if(numero2 === 0){
      return "No se puede dividir por 0";
    }
    return dividir(numero1, numero2);
  } else {
    return "Operación no válida";
  }
}

var global = "Soy global";

function funcion_alcance() {
  console.log(global);
}

funcion_alcance();



/*
  Los prototipos en javascript son una forma de agregar propiedades y metodos a un objeto
  que ya ha sido creado.
*/


console.log("Pablo clavo un clavito")

/*
  En un objeto hay propiedades y metodos
  Las propiedades devuelven un valor que puede ser string, number, boolean, etc.
  Los metodos ejecutan una funcion
*/

//Metodos de strings
var texto = "Hola, soy un texto";
//Transformar un string a mayusculas
console.log(texto.toUpperCase());
//Transformar un string a minusculas
console.log(texto.toLowerCase());
//Obtiene la posicion de una palabra en un string
console.log(texto.indexOf("soy"));
//Corta un string
console.log(texto.slice(5, 8));
//Divide un string en un array
console.log(texto.split(" "));
//Reemplaza una palabra por otra
console.log(texto.replace("Hola", "Adios"));
//Reemplaza todas las ocurrencias de una palabra por otra
console.log(texto.replaceAll("o", "0"));
//Verifica si un string incluye una palabra
console.log(texto.includes("Hola"));
//Verifica si un string empieza con una palabra
console.log(texto.startsWith("Hola"));
//Verifica si un string termina con una palabra
console.log(texto.endsWith("texto"));
//Obtiene la posicion de un caracter en un string
console.log(texto.charAt(8));
//Obtiene el codigo ASCII de un caracter
console.log(texto.charCodeAt(2));
//Recorta los espacios en blanco de un string
console.log("  Hola, soy un texto   ".trim());
//Repite un string
console.log(texto.repeat(3));
//Concatena dos strings
console.log(texto.concat(" y yo soy otro texto"));
// texto + " y yo soy otro texto"

//Array y metodos de array
var frutas = ["Manzanas", "peras", "uvas", "sandia"];
console.log(frutas[3]);

/*
graficamente que es un array? es una linea 
*/

//lista de compras

var comprar = [
    ["melon", "banana", "coco"],
    ["carnes", "pescado"],
    ["pasta", "arroz"]
  ];

  console.log(comprar[1]);
  console.log(comprar[1][1]);/*qu etipo de dato arroja ? es un string*/ 

  //Arrays y metodos de array
var frutas = ["Manzana", "Pera", "Uva", "Sandia"];
console.log(frutas[1]);
//Lista de compras
var lista = [
  ["Manzana", "Pera", "Uva", "Sandia"],
  ["carne molida", "pollo", "pescado", "cerdo"],
  ["leche", "jugo", "agua", "refresco"],
  [["papas", "zanahorias"], ["cebolla", "tomate"]]
];

console.log(lista[3][0][1])


inventario = [
  {
    categoria: "Frutas",
    productos: [
      {
        nombre: "Manzana",
        precio: 1.5,
        cantidad: 10
      },
      {
        nombre: "Pera",
        precio: 2.5,
        cantidad: 5
      }
    ]
  },
  {
    categoria: "Carnes",
    productos: [
      {
        nombre: "Pollo",
        precio: 3.5,
        cantidad: 20
      },
      {
        nombre: "Res",
        precio: 5.5,
        cantidad: 15
      }
    ]
  },
  {
    categoria: "Lacteos",
    productos: [
      {
        nombre: "Leche",
        precio: 1.5,
        cantidad: 10
      },
      {
        nombre: "Queso",
        tipos:[
          {
            nombre: "Pecorino",
            precio: 2.5,
            cantidad: 5
          },
          {
            nombre: "Mozarella",
            precio: 3.5,
            cantidad: 10
          }
        ]
      }
    ]
  }
]

console.log(inventario[2].productos[1].tipos[0].nombre)
console.log(inventario[2].productos[1].tipos[0])

const inventario_mercado = [
  {
    categoria: "Frutas",
    subcategorias: [
      {
        tipo: "Manzanas",
        marcas: [
          {
            nombre: "Apple Farms",
            origen: "EE.UU.",
            productos: [
              {
                nombre: "Manzana Gala",
                precio: 1.2,
                cantidad: 30,
                proveedor: {
                  nombre: "Fresh Import",
                  ubicacion: "California, EE.UU.",
                  contacto: "import_fresh@example.com"
                },
                condiciones: {
                  temperatura: "4°C",
                  humedad: "90%"
                },
                fechaIngreso: "2023-09-10",
                vidaUtilDias: 20,
                certificaciones: ["Orgánico", "Libre de pesticidas"],
                embalaje: "Caja de cartón con separadores"
              },
              {
                nombre: "Manzana Fuji",
                precio: 1.5,
                cantidad: 25,
                proveedor: {
                  nombre: "Fresh Import",
                  ubicacion: "California, EE.UU.",
                  contacto: "import_fresh@example.com"
                },
                condiciones: {
                  temperatura: "4°C",
                  humedad: "85%"
                },
                fechaIngreso: "2023-09-15",
                vidaUtilDias: 25,
                certificaciones: ["Orgánico", "GMO-Free"],
                embalaje: "Empaque biodegradable"
              }
            ]
          },
          {
            nombre: "EcoFruit",
            origen: "Chile",
            productos: [
              {
                nombre: "Manzana Verde",
                precio: 1.3,
                cantidad: 40,
                proveedor: {
                  nombre: "Green Supply",
                  ubicacion: "Santiago, Chile",
                  contacto: "greensupply@example.cl"
                },
                condiciones: {
                  temperatura: "3°C",
                  humedad: "80%"
                },
                fechaIngreso: "2023-09-08",
                vidaUtilDias: 30,
                certificaciones: ["Fair Trade", "Orgánico"],
                embalaje: "Bolsa de papel reciclado"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    categoria: "Carnes",
    subcategorias: [
      {
        tipo: "Aves",
        marcas: [
          {
            nombre: "FreeRange Poultry",
            origen: "Brasil",
            productos: [
              {
                nombre: "Pollo Entero",
                precio: 4.5,
                cantidad: 50,
                proveedor: {
                  nombre: "Granjas Unidas",
                  ubicacion: "São Paulo, Brasil",
                  contacto: "granjas_unidas@example.com"
                },
                condiciones: {
                  temperatura: "-2°C",
                  embalaje: "Empaque al vacío",
                  fechaCaducidad: "2023-10-05"
                },
                fechaIngreso: "2023-09-10",
                vidaUtilDias: 45,
                pesoPromedio: "1.2 kg",
                certificaciones: ["Libre de hormonas", "Bienestar animal"]
              }
            ]
          }
        ]
      },
      {
        tipo: "Res",
        marcas: [
          {
            nombre: "Bovino Premium",
            origen: "Argentina",
            productos: [
              {
                nombre: "Corte de Res Angus",
                precio: 10.0,
                cantidad: 20,
                proveedor: {
                  nombre: "Exportadora Bovino",
                  ubicacion: "Buenos Aires, Argentina",
                  contacto: "exportadora_bovino@example.com"
                },
                condiciones: {
                  temperatura: "-3°C",
                  embalaje: "Empaque al vacío"
                },
                fechaIngreso: "2023-09-12",
                vidaUtilDias: 30,
                pesoPromedio: "0.8 kg",
                certificaciones: ["GMO-Free", "Alta calidad"]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    categoria: "Lácteos",
    subcategorias: [
      {
        tipo: "Leche",
        marcas: [
          {
            nombre: "Lácteos del Valle",
            origen: "México",
            productos: [
              {
                nombre: "Leche Entera",
                precio: 2.0,
                cantidad: 100,
                proveedor: {
                  nombre: "Distribuidora Valle",
                  ubicacion: "Ciudad de México, México",
                  contacto: "distribuidora_valle@example.com"
                },
                condiciones: {
                  temperatura: "4°C",
                  embalaje: "Envase de cartón reciclable"
                },
                fechaIngreso: "2023-09-18",
                vidaUtilDias: 10,
                tipo: "Entera",
                certificaciones: ["Certificado orgánico"]
              }
            ]
          }
        ]
      },
      {
        tipo: "Quesos",
        marcas: [
          {
            nombre: "Quesería Tradicional",
            origen: "Francia",
            productos: [
              {
                nombre: "Queso Brie",
                precio: 8.5,
                cantidad: 15,
                proveedor: {
                  nombre: "Quesería Tradicional",
                  ubicacion: "París, Francia",
                  contacto: "queso_france@example.fr"
                },
                condiciones: {
                  temperatura: "5°C",
                  humedad: "75%"
                },
                fechaIngreso: "2023-09-20",
                vidaUtilDias: 60,
                origenLeche: "Vaca",
                certificaciones: ["Appellation d'origine contrôlée (AOC)"],
                embalaje: "Caja de madera"
              },
              {
                nombre: "Queso Roquefort",
                precio: 12.0,
                cantidad: 10,
                proveedor: {
                  nombre: "Quesería Tradicional",
                  ubicacion: "París, Francia",
                  contacto: "queso_france@example.fr"
                },
                condiciones: {
                  temperatura: "6°C",
                  humedad: "80%"
                },
                fechaIngreso: "2023-09-21",
                vidaUtilDias: 90,
                origenLeche: "Oveja",
                certificaciones: ["Appellation d'origine contrôlée (AOC)"],
                embalaje: "Empaque de cera ecológica"
              }
            ]
          }
        ]
      }
    ]
  }
];

//Metodos de array
frutas = ["Manzana", "Pera", "Uva", "Sandia"];
//Longitud del array
console.log(frutas.length);
//Agregar un elemento al final del array
frutas.push("Mango");
//Agregar un elemento al inicio del array
frutas.unshift("Fresa");
//Eliminar el ultimo elemento del array
frutas.pop();
//Eliminar el primer elemento del array
frutas.shift();
//Eliminar un elemento en una posicion especifica
frutas.splice(1, 1);
//Eliminar un elemento en una posicion especifica y agregar un nuevo elemento
frutas.splice(1, 1, "Uva");
//Concatenar dos arrays
var frutas2 = ["Pera", "Kiwi"];
frutas = frutas.concat(frutas2);
console.log(frutas);
// [Manzana, Uva, Sandia, Pera, Kiwi]
//Ordenar un array
console.log(frutas.sort());
//[Kiwi, Manzana, Pera, Sandia, Uva]
//Invertir un array
console.log(frutas.reverse());
//[Uva, Sandia, Pera, Manzana, Kiwi]
//Buscar un elemento en un array (devuelve la posicion)
console.log(frutas.indexOf("Uva"));
//Buscar un elemento en un array (devuelve true o false)
console.log(frutas.includes("Uva"));
//cortar un array
console.log(frutas.slice(1, 3));
// [Sandia, Pera] (no incluye el ultimo elemento)

//Curiosidad, los strings tambien pueden ser tratados como arrays
var texto = "Hola, soy un texto";
console.log(texto[4]);

//Callback
// Es una función que se pasa como argumento a otra función

function calcular_descuento(precio, descuento){
  return precio - (precio * descuento);
}

function comprar(producto = "", precio = 0,  funcioncita){
  if(producto === "manzana"){
    return funcioncita(precio, 0.1);
  } else {
    return precio;
  }
}

console.log(comprar("manzana", 100, calcular_descuento));

//[Kiwi, Manzana, Pera, Sandia, Uva]
//filtrar un array
console.log(frutas.filter(
  (fruta) => fruta.length > 4)
);
//otro ejemplo de filter
console.log(frutas.filter(
  fruta => fruta.includes("a")
));

//Ciclos (Loops)
/*
  Los ciclos nos permiten repetir un bloque de codigo
  mientras se cumpla una condicion
*/

let carros = ["Toyota", "Nissan", "Chevrolet", "Ford"];
//For
for(let i = 0; i < carros.length; i++){
  console.log(carros[i]);
}

//While
let i = 0;
while(i < carros.length){
  console.log(carros[i]);
  if(i === 3){
    break;
  }
  i++;
}

//Do while
let j = 0;
do {
  console.log(carros[j]);
  j++;
} while(j < 0);

//For of (Especial para recorrer arrays)
for(let carro of carros){
  console.log(carro);
}

let persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 20
}

//For in (Especial para recorrer objetos)
for(let propiedad in persona){
  console.log(persona[propiedad]);
}

let comidas = [
  ["Hamburguesa", "Pizza", "Tacos"],
  ["Sushi", "Ramen", "Gyoza"],
  ["Pasta", "Lasagna", "Ravioli"]
];

for(let comida of comidas){
  for(let platillo of comida){
    console.log(platillo);
  }
}

let compra = [
  {
    producto: "Manzana",
    precio: 1.5,
    tipos: ["Golden", "Red", "Green"],
    cantidad: 10
  },
  {
    producto: "Pera",
    precio: 2.5,
    tipos: ["Bartlett", "Anjou", "Bosc"],
    cantidad: 5
  }
]

//Clases
/*
  Las clases son plantillas para crear objetos
  Las clases pueden tener propiedades y metodos
*/

class Personaje {
  constructor(nombre, vida, ataque){
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
  }

  decirInformacion(){
    return `Hola soy, ${this.nombre}, tengo ${this.vida} de vida y mi ataque es de ${this.ataque}`;
  }
}

let personaje1 = new Personaje("Gandalf", 100, 50);
let personaje2 = new Personaje("Frodo", 50, 20);
let personaje3 = new Personaje("Aragorn", 150, 70);

console.log(personaje1.decirInformacion());
console.log(personaje2.decirInformacion());
console.log(personaje3.decirInformacion());

//Herencia
/*
  La herencia nos permite crear una clase a partir de otra clase
*/
class Mago extends Personaje {
  constructor(nombre, vida, ataque, magia){
    super(nombre, vida, ataque);
    this.magia = magia;
  }

  lanzarHechizo(){
    return `${this.nombre} lanza un hechizo de ${this.magia}`;
  }
}

let mago1 = new Mago("Gandalf", 100, 50, "Fuego");
console.log(mago1.lanzarHechizo());

