from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///profiles.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
CORS(app)

class Profile(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), nullable=False)
    first_name = db.Column(db.String(80), nullable=False)
    last_name = db.Column(db.String(80), nullable=False)
    org_name = db.Column(db.String(120), nullable=False)
    location = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    birthday = db.Column(db.String(20), nullable=False)

db.create_all()

@app.route('/api/profile', methods=['GET', 'POST'])
def profile():
    if request.method == 'POST':
        data = request.json
        profile = Profile.query.filter_by(id=1).first()
        if profile is None:
            profile = Profile(
                username=data.get('username'),
                first_name=data.get('first_name'),
                last_name=data.get('last_name'),
                org_name=data.get('org_name'),
                location=data.get('location'),
                email=data.get('email'),
                phone=data.get('phone'),
                birthday=data.get('birthday')
            )
            db.session.add(profile)
        else:
            profile.username = data.get('username')
            profile.first_name = data.get('first_name')
            profile.last_name = data.get('last_name')
            profile.org_name = data.get('org_name')
            profile.location = data.get('location')
            profile.email = data.get('email')
            profile.phone = data.get('phone')
            profile.birthday = data.get('birthday')
        db.session.commit()
        return jsonify({"message": "Profile saved", "data": data}), 200

    profile = Profile.query.filter_by(id=1).first()
    if profile:
        return jsonify({
            "username": profile.username,
            "first_name": profile.first_name,
            "last_name": profile.last_name,
            "org_name": profile.org_name,
            "location": profile.location,
            "email": profile.email,
            "phone": profile.phone,
            "birthday": profile.birthday
        }), 200
    return jsonify({"message": "Profile not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)

