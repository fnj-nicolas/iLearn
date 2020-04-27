
shoes = {"Nike":["tenis1", "tenis2","tenes3"],
        "Adidas":["tenis4", "tenis5","tenes6"],   
        "Converse":["tenis7", "tenis8","tenes9"]}

print (shoes["Nike"][2])

for key, list in shoes.items():
    for value in list:
        print(key, " ", value)

numbers = [1,2,3,4,6,6,7,8,9]

for valor in range(0,len(numbers)):
    print(valor, " ", numbers[valor])

for position, value in enumerate(numbers):
    print(position, " = ", value)