def valida(message):
    while True:
        try:
            data = float(input("Coloca "+message))
            return data
        except ValueError:
            print("El dato debe ser entero o decimal")

largo=valida("el largo en metros")
ancho=valida("el ancho en metros")
m2xcaja=valida("los metros cuadrados por caja")
precioXm2=valida("el precio por metro cuadrado")
precioXcaja = (m2xcaja * precioXm2)
m2Cuarto = largo * ancho
caja = m2Cuarto/m2xcaja
preciTotal = caja * precioXcaja
print("Total de cajas que se necesitan ", caja)
print("Precio todal ", preciTotal)