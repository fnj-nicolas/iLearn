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

##Character img
character = pygame.image.load(os.path.join(img, 'character.png')) #my player
characterRect = character.get_rect()
characterRect.center = (width//2,height //2)
characterMask = pygame.mask.from_surface(character)

##Enemy img
enemy = pygame.image.load(os.path.join(img, 'enemy.png')) #my player
enemyRect = enemy.get_rect()
enemyRect.center = (width//2,height //2)
enemyMask = pygame.mask.from_surface(enemy)

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
    characterRect.center = pygame.mouse.get_pos()
    Surface.fill(white)
    Surface.blit(enemy, enemyRect)
    Surface.blit(character, characterRect)

    
    offset = (characterRect.x - enemyRect.x, characterRect.y - enemyRect.y )
    if enemyMask.overlap(characterMask,offset):
        print("vamo bokita")
    pygame.display.update()