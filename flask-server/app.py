# import requests
# import json

# response = requests.get("https://world.openfoodfacts.org/api/v2/product/04963406")

# for i in response.json()['product']['_keywords']:
#     print(i)
from dataclasses import asdict
from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello!'

@app.route('/drinks')
def get_drinks():
    return {'drinks' : 'drink'} #python dictionary

@app.route('/classSize')
def get_classSize():
    json1 = {
        "success":"true", 
        "totalCount" : "30", 
        "data" : [ {"enrollment" : "30"} , {"enrollment" : "40"} ]
        }
    return json1
    

@app.route('/login')
def get_login():
    # this is comment
    log_json = {
        "username":"username1",
        "password":"password1"
        }
    return log_json