colors = ["blue","red","green","blue"]
numbers = [1,2,3,4,5,6]
person={
    "name":"Nicolas",
    "lastName":"Jimenez",
    "age":"24",
}

print("Nos devuelve un elemento de la lista y lo elimina", colors.pop(2))
#"Agregar un nuevo elemento al final de la lista"
colors.append("YELLOW")
#"Agregar un nuevo elemento en una posicion determinada"
colors.insert(1,"red1")
#"Elimna un elemento de la lista"
colors.remove("red")
#Nos devuelve cuantas veces apracere un elemento en la lista"
colors.count("blue")

for value in colors:
    print(value)

for value in numbers:
    print(value)
print("Invertimos una lista")
numbers.reverse()
for value in numbers:
    print(value)

print("Fucionamos Listas")
numbers.extend(colors)
for value in numbers:
    print(value)

print("Modificamos un elemento de una lista")
colors[2]="Brown"
for value in colors:
    print(value)


for key,value in person.items():
    print(key, " ", value)    


