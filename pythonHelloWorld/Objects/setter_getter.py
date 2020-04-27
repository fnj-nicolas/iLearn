class User:
    __age = 0
    def __init__(self,nombre):
        #constructor
        self._nombre = nombre        

    def saludar(self, saludo):
        print(saludo+ self.nombre)
    @property 
    def age(self): #getter
        return self.__age
    @age.setter
    def age(self,value):
        if (value<0):
            raise ValueError("Age cannot be less than 0")
        self.__age = value
class Employee(User):
    __salary = 0
    def modifySaliry(self,salary): #setter
        self.__salary= salary

    def seeSalary(self): #getter
        print(self.__salary)

    def greet(self):
        super().saludar("Hola!")
        print("Mi nombre es: "+self._nombre+" y ganó: "+str(self.__salary))

employee=Employee("Nicolas")
employee.age = 24
print(employee.age)