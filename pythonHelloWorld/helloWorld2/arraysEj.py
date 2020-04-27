x =int(input("ingrese valor uno \n"))
y= int(input("ingrese valor dos \n"))

def plusNumbers(x1,x2):
    valor = 0
    par = 0
    impar = 0
    x2+=1
    for valor in range(x1,x2):
        if valor%2 ==0:
            par +=valor
        else:
            impar+=valor 
    print("Numeros par ", par)
    print("Numeros impar ", impar)
plusNumbers(x,y)