# import requests
# import json

# response = requests.get("https://world.openfoodfacts.org/api/v2/product/04963406")

# for i in response.json()['product']['_keywords']:
#     print(i)
from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello!'

@app.route('/drinks')
def get_drinks():
    return {'drinks' : 'drink'}