from ast import Try
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
    

@app.route('/login', methods=['POST'])
def get_login():
    try:
        users_ref = db.collection('users')
        check_user = users_ref.document(request.json['username']).get().to_dict()
        len(check_user)
        if ((check_user['username'] == request.json['username'] and check_user['password'] == request.json['password']) == False):
            return jsonify({'loggedIn' : False})
        else:
            return jsonify({'loggedIn' : True, 'username' : request.json['username']})
    except Exception as e:
        print('af')
    return jsonify({'loggedIn' : False})

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

@app.route('/getTasks', methods=['GET'])
def get_tasks():
    try:
        #users_ref = db.collection('users')
        #check_user = users_ref.document(request.json['username']).get().to_dict()
        print("hi")
    except Exception as e:
        return f"Error in /gettasks"
    
    return {'name' : 'change'}

@app.route('/getUser', methods=['GET'])
def get_user():
    #users_ref = db.collection('users')
    #check_user = users_ref.document(request.json['username']).get().to_dict()
    #print(request.json['username'])
    return{'name' : 'change'}
