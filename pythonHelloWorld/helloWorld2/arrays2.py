shoes = [["tenis1", "tenis2","tenes3"],
        ["tenis4", "tenis5","tenes6"],   
        ["tenis7", "tenis8","tenes9"]]

print (shoes[2][2])

##
shoes = [{"Nike":"tenis1", "Converse":"tenis2","Adidas":"tenes3"},
        {"Nike":"tenis4", "Converse":"tenis5","Adidas":"tenes6"},   
        {"Nike":"tenis7", "Converse":"tenis8","Adidas":"tenes9"}]


print(shoes[2]["Nike"])

##
shoes = {"Nike":["tenis1", "tenis2","tenes3"],
        "Adidas":["tenis4", "tenis5","tenes6"],   
        "Converse":["tenis7", "tenis8","tenes9"]}

print (shoes["Nike"][2])