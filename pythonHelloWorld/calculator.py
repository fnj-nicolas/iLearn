""" ESTO ES UN COMENTARIO """
#ESTO TAMBIEN ES UN COMENTARIO
print("Hola, estos son mis primeros pasos con python. \nElige entre estos operadores. \n(1) para sumar. \n(2) para restar. \n(3) para multiplicar \n(4) para dividir ")

operando = int(input())
num1 = int(input("Ingrese el primer numero "))
num2 = int(input("Ingresa el segundo numero "))
resultado = 0
if (operando == 1):
    resultado = num1 + num2
elif (operando == 2):
    resultado = num1 - num2
elif (operando == 3):
    resultado = num1 * num2
elif(operando == 4):
    resultado = float(num1 / num2)

print("El resultado es: ", resultado)

