import pyautogui as pag
import time

iterations = 0

while iterations != 0:
    pag.hotkey('ctrl','c') # copy the pro number from excel sheet
    time.sleep(1)

    pag.moveTo(0,0) #find the x and click on LT
    pag.click(clicks=2)
    
    time.sleep(1)
    
    pag.move(-50,0) #paste in PRO number into drill down
    pag.click(button="right")
    pag.press('down')
    time.sleep(0.500)
    pag.press('down')
    time.sleep(0.500)
    pag.press('down')
    time.sleep(0.500)
    pag.press('down')
    time.sleep(0.500)
    pag.press('enter')
    time.sleep(0.500)
    pag.press('enter')
    time.sleep(0.500)

    pag.press('f2') # go into the pro
    
    time.sleep(5)

    pag.moveTo(0,0) # click on multipay tab
    pag.click()

    time.sleep(1)

    pag.moveTo(0,0) # click into multipay tab
    pag.click()

    time.sleep(0.500)

    pag.press('f2') # enter a new record
    time.sleep(0.500)
    pag.press('enter')

    time.sleep(2)

    pag.press('tab') # set the division
    time.sleep(0.500)
    pag.write('CHZ')

    pag.press('tab') # invoice number goes here
    time.sleep(0.250)
    pag.press('tab')
    time.sleep(0.250)
    pag.press('tab')
    time.sleep(0.500)
    pag.write('')

    time.sleep(0.500)

    pag.press('tab') # Carrier ID goes here
    time.sleep(0.500)
    pag.write('')
    time.sleep(0.500)
    pag.press('tab')
    time.sleep(1)
    pag.press('enter')

    pag.moveTo(0,0) # click into multipay adjustments tab
    pag.click()
