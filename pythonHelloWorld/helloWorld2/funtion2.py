def salaryWeek(hrs, salaryHr,job):
    salary = hrs * salaryHr
    salary = salary * 7
    salary1 = hrs * 2
    print(salaryHr)
    print("El suedo del ", job, "es ", salary)

num1=int(input("Ingrese el numero de horas \n"))
num2=int(input("Ingrese el salario \n"))
string=input("Ingrese profesión \n")


salaryWeek(num1,num2,string)
