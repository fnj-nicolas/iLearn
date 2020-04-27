class User:
    def __init__(self,nombre):
        #constructor
        self._nombre = nombre        

    def saludar(self, saludo):
        print(saludo+ self.nombre)

class Employee(User):
    __salary = 0
    def modifySaliry(self,salary):
        self.__salary= salary

    def seeSalary(self):
        print(self.__salary)

    def greet(self):
        print("Mi nombre es: "+self._nombre+"y ganó: "+str(self.__salary))

class Admin(Employee):
    def miSalary(self):
