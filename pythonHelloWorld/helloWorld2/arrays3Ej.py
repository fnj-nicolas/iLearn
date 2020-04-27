matrix1 = [[1,2,3],[7,8,9],[13,14,15]]
matrix2 = [[4,5,6],[10,11,12],[16,17,18]]
matrix3 = [[1,2,3],[7,8,9],[13,14,15]]
for pos, valor in enumerate(matrix1):
    print(matrix1[pos])
    for pos1,valor2 in enumerate(valor):
        print(valor2)
        matrix3[pos][pos1]=valor2+matrix2[pos][pos1]
        print(matrix2[pos][pos1])
        
print (matrix3)