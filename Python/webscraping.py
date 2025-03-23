#Make a software to scrap data from a website
#The software should be able to scrap the data from the website and save it in a file

import selenium
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

links = [
  "https://es.wikipedia.org/wiki/Amparo_Rivelles"
  "https://es.wikipedia.org/wiki/Espect%C3%A1culo_de_medio_tiempo_del_Super_Bowl_XLIX"
]

# Open the browser
driver = webdriver.Chrome()

# Open the link
for link in links:
  driver.get(link)

  # Wait for the page to load
  time.sleep(5)

 # get the title of the page
title = driver.find_element_by_tag_name("id=firstHeading").text

# get the cotent  from x-path /html/body/div[3]/div[3]/div[5]/div[1]/p[1]
content = driver.find_element_by_xpath("mw-content-text").text

# Save the content in a file
with open(f"{title}.txt", "w") as file:
  file.write(content)