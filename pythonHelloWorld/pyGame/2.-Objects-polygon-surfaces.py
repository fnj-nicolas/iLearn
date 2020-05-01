import sys
import pygame

pygame.init()

width = 400
height = 500


Surface = pygame.display.set_mode((width,height)) #surface
pygame.display.set_caption("Hola mundo")

#RGB
white = (255,255,255)
red = (115,38,80)
yellow = (255,212,0)
green=(0,255,0)
green2=(106,218,126)
blue=(0,0,255)


Surface2 = pygame.Surface((200,200))
Surface2.fill(green)

rect = Surface2.get_rect()
rect.center = (width//2, height//2)

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    Surface.fill(white)

    #Triangulo
    pygame.draw.polygon(Surface, green2, ((0,400),(100,300),(200,400)))

    #Pentagono
    pygame.draw.polygon(Surface, red,(
        (146,0),
        (291,106),
        (236,277),
        (56,277),
        (0,106),
        ))
    Surface.blit(Surface2,rect)
    pygame.draw.rect(Surface2,yellow,(100,50,80,40))
    pygame.display.update()