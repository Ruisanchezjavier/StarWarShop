"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, User_Profiles, User_Sessions, Category, Product, Image
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

# Initialize Flask-JWT-Extended

        
@api.route('/token', methods=['POST'])
def generate_token():

    username = request.json.get("username", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    username = username.lower()
    user = User.query.filter_by(username=username, email=email, password=password).first()

    if user is None:
        response = {
            "msg": "Username or Password does not match."
        }
        return jsonify(response), 401
    
    access_token = create_access_token(identity=user.id)
    response = {
        "access_token": access_token,
        "user_id": user.id,
        "msg": f'Welcome {user.email}! This worked!'
    }
    return jsonify(response), 200

@api.route('/signup', methods=['POST'])
def register_user():
    username = request.json.get('username', None)
    email = request.json.get('email', None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email).first()

    if user is not None and user.username == username:
        response = {
            "msg": "User already exists."
        }
        return jsonify(response), 403
    
    user = User(email=email,password=password,username=username)
    db.session.add(user)
    db.session.commit()
   

    response = {
        "msg": f"Congratulations {user.email}. You have successfully sign up!"
    }
    return jsonify(response), 200

@api.route("/user_profile", methods=['GET'])
@jwt_required()
def get_user_profile():
    user_id = get_jwt_identity()
    user = User.query.filter_by(id = user_id).first()
    user_profile_information = User_Profiles.query.filter_by(user_id=user_id).all()

    processed_user_profile_info = [each_profile_information.serialize() for each_profile_information in user_profile_information]

    response = {
        "msg": f"Hello {user.username}, here are your profile information.",
        "profile_info":  processed_user_profile_info
    }
    return jsonify(response), 200
