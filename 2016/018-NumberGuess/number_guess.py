# -*- coding: utf-8 -*-

import random

a,b=1,256

print "Talen varierar mellan {0} och {1}".format(a,b)
facit = random.randint(a,b)
antal = 0
gissning = 0
while gissning != facit:
    antal += 1
    gissning = input("Gissa ett tal! ")
    if gissning < facit:
        print "Ditt tal är för litet"
    if gissning > facit:
        print "Ditt tal är för stort"
print "Du gissade rätt! Det tog {0} gånger".format(antal)
