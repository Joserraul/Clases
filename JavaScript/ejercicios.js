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


function calculadora(numero1, numero2, operador = "invalido"){
  console.log(numero1 + numero2);
} if (operador == "-"){
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