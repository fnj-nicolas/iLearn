from abc import ABC, abstractmethod

#clase abstract
class EstructuraAbstracta(ABC):
    @abstractmethod
    def obtener():
        pass
    @abstractmethod
    def agregar():
        pass
    
    
class Hash(EstructuraAbstracta):
    datos={}
    def obtener(self,llave):
        datos[llave]

    def agregar(self,llave,valor):
        datos[llave]=valor

class Queue(EstructuraAbstracta):
    datos = []

    def obtener(self):
        datos[0]

    def agregar(self,llave,valor):
        datos[len(datos)-1]=valor        

class FilaBanco:
    def __init__(self,almacenUsuario):
        if not isinstance (almacenUsuario,EstructuraAbstracta):
            raise ValueError("Store is not supported")
        self.usuarios=almacenUsuario

    def siguienteUsuario(self,numero):
        #Implementación
        return self.usuarios.obtener(numero)
    
    def formarUsuario(self,numero,usuario):
            self.usuarios.agregar(numero,usuario)
            

FilaBanco(Queue())