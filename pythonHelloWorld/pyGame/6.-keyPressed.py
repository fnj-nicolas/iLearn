import sys
import pygame
import os
from pygame.locals import*

pygame.init()

width = 400
height = 500


Surface = pygame.display.set_mode((width,height)) #surface
pygame.display.set_caption("Hola mundo")


current_path = os.path.dirname(__file__) # Where your .py file is located
img = os.path.join(current_path,"img") # The image folder path
font = os.path.join(current_path,"fonts")
sounds = os.path.join(current_path,"sounds")

#RGB
white = (255,255,255)
red = (115,38,80)
yellow = (255,212,0)
green=(0,255,0)
green2=(106,218,126)
blue=(0,0,255)
message = "Preciona una tecla"
#Obteber una fuente
font = pygame.font.Font(os.path.join(font,"Roboto-Thin.ttf"), 30)
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
    pressed = pygame.key.get_pressed()
    if pressed[pygame.K_w]:
        message = "UP"
    if pressed[pygame.K_a]:
        message = "LEFT"
    if pressed[pygame.K_d]:
        message = "RIGHT"
    if pressed[pygame.K_s]:
        message = "DOWN"


    ##time = pygame.time.get_ticks()//1000#Milisegundos
    text = font.render(message,True,red) #->surface
    rect = text.get_rect()
    rect.center = (width//2, height//2)
    Surface.fill(white)
    Surface.blit(text,rect)
    pygame.display.update()