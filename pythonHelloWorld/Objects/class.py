class User:
    def __init__(self,nombre):
        #constructor
        self.nombre = nombre        
    def saludar(self, saludo):
        print(saludo+ self.nombre)

class Employee(User):
    salary = 0
    def modifySaliry(self,salary):
        self.salary= salary
    def seeSalary(self):
        print(self.salary)
    def greet(self):
        print("Mi nombre es: "+self.nombre+"y ganó: "+str(self.salary))
employee = Employee("Nicolas")
employee.modifySaliry(1000)
employee.seeSalary()
employee.greet()

class Page:
    def printFooter(self):
        print(self.footer)
class LegalPage(Page):
    def printFooter(self):
        print("All rights reserved")
        super().printFooter()
html = LegalPage()
html.footer = "<p>Hola Mundo!<p>"
html.printFooter()
