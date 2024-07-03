from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "user_table"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    user_profile = db.relationship("User_Profiles", back_populates="user")
    

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    
class User_Profiles(db.Model):
    __tablename__ = "userprofiles_table"
    profile_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.ForeignKey('user_table.id'))
    first_name = db.Column(db.String(120), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False)
    user_email = db.Column(db.String(120), unique=True, nullable=False)
    user_address = db.Column(db.String(120), unique=False, nullable=False)
    profile_picture = db.Column(db.String(80), unique=False, nullable=True)
    user = db.relationship("User", back_populates="user_profile")

    def __repr__(self):
        return f'<User_Profiles {self.user_email}>'
    
    def serialize(self):
        return {
            "first_name": self.first_name,
            "last_name": self.last_name,
            "user_email": self.user_email,
            "user_address": self.user_address,
            "profile_picture": self.profile_picture,
        }
    
class User_Sessions(db.Model):
    __tablename__ = "usersessions_table"
    session_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.ForeignKey('user_table.id'))
    session_token = db.Column(db.String(120), unique=True, nullable=False)
   
    def __repr__(self):
        return f'<User_Sessions {self.session_token}>'

    def serialize(self):
        return {
            "session_id": self.session_id,
            "session_token": self.session_token,
        }