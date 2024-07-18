from flask import Flask, request, jsonify, Blueprint
from api.models import db, User, User_Sessions, Category, Product, Image
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import get_jwt_identity, create_access_token, jwt_required

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

@api.route("/profile", methods=['PUT'])
@jwt_required()
def update_user_profile():
    user_id = get_jwt_identity()
    user = User.query.filter_by(id=user_id).first()
    
    if not user:
        return jsonify({"msg": "User not found"}), 404

    username = request.json.get('username', user.username)
    first_name = request.json.get('firstName', user.first_name)
    last_name = request.json.get('lastName', user.last_name)
    email = request.json.get('email', user.email)
    password = request.json.get('password', user.password)
    address = request.json.get('address', user.address)
    profile_picture = request.json.get('profilePhoto', user.profile_photo)

    user.username = username
    user.first_name = first_name
    user.last_name = last_name
    user.email = email
    user.password = password
    user.address = address
    user.profile_picture = profile_picture

    db.session.commit()  # Commit changes to the database

    response = {
        "msg": f"Profile updated for {user.username}.",
        "user": user.serialize()
    }
    return jsonify(response), 200
