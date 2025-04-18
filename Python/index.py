#Python debe estar organizado sino no funciona
#Los programas en python son funciones
# puro codigo lineal y programacion solo con funciones
# para imprimir desde python se usa print y en el terminal se usa python3 nombre.py 

import os
import time
import re

'''
Comentarios de multiples lineas
'''

#variables
numero = 10
nombre = "Jr"
numero_decimal = 10.5
es_verdadero = True
es_falso = False
lista = [10, 20, 30, 40, 50]
tuple = (10, 20, 30, 40, 50)
diccionario = {'nombre': 'Jr', 'apellido': 'Mundaray', 'edad': 24} #solo tiene clave y valor (no tiene orden)
nulo = None

# Imprimir
print(numero)

# Concatenar
print("Hola " + nombre)

# Interpolacion
print(f"Hola {nombre}")

#print("1" + 1) # Error

# Conversion de tipos
print(int("1") + 1)
print(str(1) + "1")

# Operadores de asignacion
numero = 10
numero += 1 # numero = numero + 1
numero -= 1
numero *= 1
numero /= 1
numero %= 1
numero **= 1
numero //= 1

# Operadores de comparacion
print(10 == 10) #igual
print(10 != 10) #diferente
print(10 > 10) #mayor
print(10 < 10) #menor
print(10 >= 10) #mayor o igual
print(10 <= 10) #menor o igual

# Operadores logicos
print(10 and 10) #and
print(10 or 10) #or
print(not 10) #not

#ejercicio
print( not((10 == 10) and (10 != 10)) )

# Input

"""nombre = input("Ingresa tu nombre: ")

#Condicionales
if nombre == "Jr":
  print("Hola Jr")
elif nombre == "Pedro":
  print("Hola Pedro")
else:
  print("Hola desconocido")
"""
"""
  Realiza:
  1) - Un programa donde puedas jugar piedra, papel o tijera contra la computadora y ver cuantas partidas
  ganaste, perdiste o empataste y despues preguntar si quieres volver a jugar.

  2) - Un programa que genere un numero aleatorio entre 1 y 100 y te de 5 oportunidades para adivinarlo,
  si adivinas en menos de 5 oportunidades imprime "Felicidades ganaste" de lo contrario "Perdiste"

  Fecha de entrega: 05/02/2025
"""

#Funciones
def saludar():
  print("Hola")

saludar()

#Funciones con parametros
def saludar_a(nombre = "desconocido"):
  print(f"Hola {nombre}")

saludar_a()

#Funciones con retorno
def sumar(a, b):
  return a + b

resultado = sumar(10, 5)

#Funciones recursivas

def factorial(n):
  if n == 0:
    return 1
  print(n)
  return n * factorial(n - 1)

print(factorial(5))
#5 * 4 * 3 * 2 * 1

#Metodos de strings
nombre = "Juan Perez"

#upper
# Convierte el string a mayusculas
print(nombre.upper())

#lower
# Convierte el string a minusculas
print(nombre.lower())

#capitalize
# Convierte la primera letra del string a mayuscula
print(nombre.capitalize())

#count
# Cuenta cuantas veces se repite un caracter en el string
print(nombre.count("e"))

#find
# Busca un caracter en el string y devuelve la posicion
print(nombre.find("P"))

#replace
# Reemplaza un caracter por otro
print(nombre.replace("Juan", "Pedro"))

#split
# Divide el string en una lista
print(nombre.split(" "))
#["Juan", "Perez"]

#join
# Une los elementos de una lista en un string
print(" ".join(["Juan", "Perez"]))
#Juan Perez

#strip
# Elimina los espacios en blanco al inicio y al final del string
print("    Hola    ".strip())

#lstrip
# Elimina los espacios en blanco al inicio del string
print("    Hola    ".lstrip())

#rstrip
# Elimina los espacios en blanco al final del string
print("    Hola    ".rstrip())

#Metodos de listas
lista = [1,2,3,4,5]

#append
# Agrega un elemento al final de la lista
lista.append(6)

#extend
# Agrega los elementos de una lista a otra lista
lista.extend([7,8,9])

#insert
# Agrega un elemento en una posicion especifica
lista.insert(0, 0)

#remove
# Elimina un elemento de la lista
lista.remove(0)

#pop
# Elimina un elemento de la lista por su indice
lista.pop(0)

#clear
# Elimina todos los elementos de la lista
lista.clear()

#sort
# Ordena los elementos de la lista
lista = [5,3,1,4,2]
lista.sort()

#reverse
# Invierte los elementos de la lista
lista.reverse()

#copy
# Copia los elementos de una lista a otra lista
lista2 = lista.copy()

#Metodos de diccionarios
diccionario = {
  "nombre": "Juan",
  "apellido": "Perez"
}

print(diccionario["nombre"])

#keys
# Devuelve las claves del diccionario
print(diccionario.keys())

#values
# Devuelve los valores del diccionario
print(diccionario.values())

#items
# Devuelve las claves y los valores del diccionario
print(diccionario.items())

#get
# Devuelve el valor de una clave
print(diccionario.get("nombre"))

#setdefault
# Devuelve el valor de una clave, si no existe la crea
print(diccionario.setdefault("nombre", "Pedro"))

#pop
# Elimina un elemento del diccionario por su clave
diccionario.pop("nombre")

#clear
# Elimina todos los elementos del diccionario
diccionario.clear()

#copy
# Copia los elementos de un diccionario a otro diccionario
diccionario2 = diccionario.copy()

#Metodos de tuplas
tupla = (1,2,3,4,5)

#count
# Cuenta cuantas veces se repite un elemento en la tupla
print(tupla.count(1))

#index
# Devuelve la posicion de un elemento en la tupla
print(tupla.index(1))

#Loops
letras = ["a", "b", "c", "d", "e"]
#For
for letra in letras:
  print(letra)

#While
i = 0
while i < 5:
  print(letras[i])
  i += 1

#Range
for i in range(5):
  print(i)
#Funciones de tiempo

#time
# Devuelve el tiempo en segundos
print(time.time())

#sleep
# Pausa la ejecucion del programa
time.sleep(2)

#ctime
# Devuelve la fecha y hora actual
print(time.ctime())

#strftime
# Formatea la fecha y hora
print(time.strftime("%d/%m/%Y"))



"""
  Crea un programa que sea un sistema de inventario de una tienda, el programa debe tener las siguientes opciones:
  1) - Agregar un producto
  2) - Eliminar un producto
  3) - Ver todos los productos

  El programa debe tener un arreglo de productos y cada producto debe tener los siguientes atributos:
  - Nombre
  - Precio
  - Cantidad

  Una vez que se agregue un producto se debe mostrar un mensaje de "Producto agregado correctamente"
  y debe de haber una espera de 3 segundos antes borrar toddos los mensajes de la terminal
  y mostrar el menu nuevamente.

  Debes de utilizar funciones, loops y condicionales o metodos de listas y diccionarios.

  Fecha de entrega: 06/02/25
"""

#Programacion orientada a objetos

class Persona:
  def __init__(self, nombre, apellido):
    self.nombre = nombre
    self.apellido = apellido

  def saludar(self):
    print(f"Hola {self.nombre} {self.apellido}")


jr = Persona("Mechada", "ramon")
jr.saludar()

#Herencia (es cuando usa una clase para crear otra clase)

class Estudiante(Persona): #aqui es donde esta la herencia
  def __init__(self, nombre = "Jr", apellido = "Mundaray", carrera = "Informatica"): #aqui se le agrega un nuevo atributo junto a los atributos de la clase padre
    try: #aqui se maneja el error
      super().__init__(nombre, apellido) #aqui se llama a la clase padre con super()
      self.carrera = carrera #aqui se agrega el nuevo atributo
    except Exception as e:
      print("Error")

  def saludar(self):
    print(f"Hola soy {self.nombre} {self.apellido} y estudio {self.carrera}")

jr = Estudiante("Mechada", "ramon", )
jr.saludar()

"""
                    Programacion defenciva

si te fas cuenta en la class agregamos parametros
ya definidos para controlar algun error en caso
de que no se ponga un parametro
ademas colocamos el try except para manejar el error

  AQUI PREVENIMOS UN ERROR, AYUDANDO A QUE EL PROGRAMA NO SE CAIGA

"""

#validacion de datos

correo = "hola@gmail.com"
patron = r"a-zA-Z0-9]+@[a-zA-Z]+\.(com|es)"
if re.match(patron, correo):
  print("Correo valido")

