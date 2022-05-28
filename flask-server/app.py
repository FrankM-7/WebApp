import firebase_admin
from firebase_admin import credentials, firestore, initialize_app
from flask import Flask, request, jsonify

cred = credentials.Certificate("credentials.json")
default_app = firebase_admin.initialize_app(cred)
db = firestore.client()

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

@app.route('/register', methods=['POST'])
def create():
    try:
        print(request.json)
        id = request.json['username']
        users_ref = db.collection('users')
        users_ref.document(id).set(request.json)
        return jsonify({"success": True}), 200
    except Exception as e:
        return f"An Error Occured: {e}"
