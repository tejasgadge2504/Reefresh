from flask import Flask,request,jsonify
import json
import os
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
@app.route('/')
def Hello():
    return 'hello'

@app.route('/login',methods=['POST'])
def login():
    data = request.get_json()
    username= data.get('username')
    password= data.get('password')
    role = data.get('role')
    
    try:
        with open('./database/auth/user.json') as file:
            users = json.load(file)
            
        for user in users :
            if user['username']==username and user['password']==password and user['role']==role:
                return jsonify({"success":True,"msg":"login successful","user":user})
        return jsonify({"success":False,"msg":"Invalid username, password or role"}),401
    except Exception as e:
        return jsonify({"success": False, "msg": "Server Error", "error": str(e)}), 500
    
    
# ✅ New route to handle event creation
@app.route('/addEvent', methods=['POST'])
def addEvent():
    try:
        data = request.get_json()

        file_path = './database/events/pendingEvents.json'

        # Ensure the file exists
        if not os.path.exists(file_path):
            with open(file_path, 'w') as f:
                json.dump([], f)

        with open(file_path, 'r') as file:
            events = json.load(file)

        events.append(data)

        with open(file_path, 'w') as file:
            json.dump(events, file, indent=4)

        return jsonify({"success": True, "msg": "Event added successfully!"}), 201

    except Exception as e:
        return jsonify({"success": False, "msg": "Error while saving event", "error": str(e)}), 500

@app.route('/getEvents', methods=['GET'])
def getEvents():
    try:
        with open('./database/events/pendingEvents.json', 'r') as f:
            events = json.load(f)
        return jsonify({"success": True, "events": events}), 200
    except Exception as e:
        return jsonify({"success": False, "msg": "Could not fetch events", "error": str(e)}), 500


@app.route('/sadmin_getEvents')
def sadmin_getEvents():
    try:
        with open('/database/events/pendingEvents.json','r') as f:
            events = json.load(f)
            for eve in events:
                if eve['approvalStatus'] == False:
                    pendingEvents += eve
            if(pendingEvents):
                return jsonify({"success": True,"pendingEvents":pendingEvents}),200
            else:
                return jsonify({"success": True,"pendingEvents":"No Events found to Approve"}),200
    except Exception as e:
        return jsonify({"success": False,"msg": "Could not fetch events", "error": str(e)}),500
            
        

if __name__ == '__main__':
    app.run()