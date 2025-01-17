from flask import Flask, request, jsonify, Blueprint
from api.models import db, User, User_Sessions, Category, Product, Image
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import get_jwt_identity, create_access_token, jwt_required
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import timedelta

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
    
    access_token = create_access_token(identity=user.id, expires_delta=timedelta(hours=1))
    response = {
        "access_token": access_token,
        "user_id": user.id,
        "msg": f'Welcome {user.email}! This worked!'
    }
    return jsonify(response), 200

@api.route('/signup', methods=['POST'])
def register_user():
    first_name = request.json.get('first_name', None)
    last_name = request.json.get('last_name', None)
    address = request.json.get('address', None)
    username = request.json.get('username', None)
    email = request.json.get('email', None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).first()
    if user:
        response = {
            "msg": "User already exists."
        }
        return jsonify(response), 409
    user = User(email=email,password=password,username=username,first_name=first_name,last_name=last_name,address=address)
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

@api.route("/user", methods=['DELETE'])
@jwt_required()
def delete_user():
    user_id = get_jwt_identity()
    user = User.query.filter_by(id = user_id).first()
    db.session.delete(user)
    db.session.commit()
    response = {
        "msg": f"Your user was successfully deleted",
    }
    return jsonify(response), 200

@api.route("/profile", methods=['PUT'])
@jwt_required()
def update_user_profile():
    user_id = get_jwt_identity()
    user = User.query.filter_by(id=user_id).first()
    
    if not user:
        return jsonify({"msg": "User not found"}), 404

    username = request.json.get('username', user.username)
    first_name = request.json.get('first_name', user.first_name)
    last_name = request.json.get('last_name', user.last_name)
    email = request.json.get('email', user.email)
    password = request.json.get('password', user.password)
    address = request.json.get('address', user.address)
    profile_picture = request.json.get('profile_picture', user.profile_picture)

    user.username = username
    user.first_name = first_name
    user.last_name = last_name
    user.email = email
    user.password = password
    user.address = address
    user.profile_picture = profile_picture

    db.session.commit()

    response = {
        "msg": f"Profile updated for {user.username}.",
        "user": user.serialize()
    }
    return jsonify(response), 200

@api.route("/change_password", methods=['PUT'])
@jwt_required()
def change_password():
    user_id = get_jwt_identity()
    user = User.query.filter_by(id=user_id).first()

    if not user:
        return jsonify({"msg": "User not found"}), 404

    data = request.get_json()
    new_password = data.get('new_password')

    user.password = new_password
    db.session.commit()

    return jsonify({"msg": "Password updated successfully"}), 200

@api.route("/verify-password", methods=['POST'])
@jwt_required()
def verify_password():
    user_id = get_jwt_identity()
    user = User.query.filter_by(id=user_id).first()
    if not user:
        return jsonify({"msg": "User not found"}), 404
    data = request.get_json()
    password = data.get('password')
    if user.password!= password:
        return jsonify({"msg": "Wrong password"}), 401

    return jsonify({"msg": "Password is correct"}), 200