#import pywhatkit
import pywhatkit as kit
import datetime
import time


numbers =  [
    {
    "nombre": "Crush",
    "telefono": "+584122207221"
    },
    {
    "nombre": "Fiorella",
    "telefono": "+584248911411"
    }
]

"""

kit.sendwhatmsg_to_group("GEfJJglKcqBAO5dWdBF8Pz", "Este es un mensaje de bot", now.hour, now.minute + 1, 10, True)
print("Mensaje enviado")

"""

now = datetime.datetime.now()
if (now.minute + 1 == 30):
    now.hour += 1
    now.minute = 0

for number in numbers:
    kit.sendwhatmsg(number["telefono"], f"Hola {number['nombre']} estoy usando un bot", now.hour, now.minute + 1, 10, True)
    print("Mensaje enviado a " + number["nombre"])
    time.sleep(10)
