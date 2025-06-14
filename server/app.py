from flask import Flask,request,jsonify
import json
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
    
    
if __name__ == '__main__':
    app.run()