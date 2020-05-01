import sys
import pygame

pygame.init()

width = 400
height = 500


Surface = pygame.display.set_mode((width,height)) #surface
pygame.display.set_caption("Hola mundo")

#RGB
white = (255,255,255)
red = (115),38,80
green=(57,255,20)

rect = pygame.Rect(100,150,120,60) ##Interacion
rect.center = (width//2, height//2)


print (rect.x)
print (rect.y)


rect2=(100,100,80,40)  ##"Solidos"

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    Surface.fill(white)

    pygame.draw.rect(Surface, red, rect) ##"Pintar" cuadrado
    pygame.draw.rect(Surface, green, rect2)

    pygame.display.update()