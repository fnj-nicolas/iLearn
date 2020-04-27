
fruits = ["apple", "banana", "cherry"]

def hw(d):
    print("Hello world!!", d)

for x in range(6):
    hw(x)

for i in fruits:
    hw(i)

def saludar(nom,lug):
    return "hola {}!! Como es {}?, seguramente es un lugar muy agradable".format(nom,lug)

nombre = input("Te quiero saludar, me dices tu nombre? \n")
print("oh! Como estas? ", nombre)
lugar = input("de donde eres? ")

print(saludar(nombre,lugar))