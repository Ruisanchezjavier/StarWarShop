"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User,User_Sessions, Category, Product, Image
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

    email = request.json.get("email", None)
    password = request.json.get("password", None)

    
    user = User.query.filter_by(email=email).first()

    if user is None:
        response = {
            "msg": "user not found"
        }
        return jsonify(response), 404
    
    if user.password != password:
        response = {
            "msg": "invalid password"
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

    if user:
        response = {
            "msg": "User already exists."
        }
        return jsonify(response), 409
    
    user = User(email=email,password=password,username=username)
    db.session.add(user)
    db.session.commit()
   

    response = {
        "msg": f"Congratulations {user.email}. You have successfully sign up!"
    }
    return jsonify(response), 200

@api.route("/user", methods=['GET'])
@jwt_required()
def get_user_profile():
    user_id = get_jwt_identity()
    user = User.query.filter_by(id = user_id).first()
    
    response = {
        "msg": f"Hello {user.username}, here are your profile information.",
        "user": user.serialize()
    }
    return jsonify(response), 200