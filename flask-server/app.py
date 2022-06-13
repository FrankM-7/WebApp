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
    

@app.route('/login', methods=['POST']) #
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
        foodList = {'breakfastList': [], 'lunchList': [],'dinnerList': [],'snackList': []}
        jsondic = {**request.json, **foodList}
        users_ref.document(id).set(jsondic)
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

# gets BLDS (Breakfast Lunch Dinner Snack)
@app.route('/getBLDS', methods=['GET'])
def get_breakfast():
    users_ref = db.collection('users')

    #check_user = users_ref.document(request.json['username']).get().to_dict()
    breakfast = users_ref.document(request.json['username']).get().to_dict()['breakfastList']
    lunch = users_ref.document(request.json['username']).get().to_dict()['lunchList']
    dinner = users_ref.document(request.json['username']).get().to_dict()['dinnerList']
    snack = users_ref.document(request.json['username']).get().to_dict()['snackList']

    return{'breakfast' : breakfast, 'lunch' : lunch, 'dinner' : dinner, 'snack' : snack}

@app.route('/addBreakfastItem', methods=['PUT']) 
def add_breakfast():
    id = request.json['username']
    user_ref.document(id).update(request.json)
    return jsonify({"success": True}), 200

