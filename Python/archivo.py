#manejo de archivos

"""
w = write (sobreescribe)
r = read
a = append
x = create (si ya existe, lanza un error)

"""
#abre un archivo en modo escritura y escribe "hola mundo"
f = open("archivo.txt", "w")
f.write("hola mundo")
f.close

#abre un archivo en modo lectura y lee el contenido
f = open("archivo.txt", "r")
print(f.read())
f.close

#abre un archivo en modo append y agrega "hola mundo"
f = open("archivo.txt", "a")
f.write("\nChao mundo")
f.close

#abre un archivo en modo de escritura y crea un archivo
f = open("archivo.txt", "x")
f.write("hola mundo")
f.close