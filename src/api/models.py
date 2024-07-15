from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()


class Chapters(db.Model):      
    id = db.Column(db.Integer,primary_key=True)      
    title = db.Column(db.String(100), primary_key=True, nullable=False)      
    image_file = db.Column(db.String(20),nullable=False) 

    def __repr__(self): 
        return f"Chapters('{self.title}','{self.image_file}')"

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    price = db.Column(db.Float, nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=False)
    images = db.relationship('Image', backref='product', lazy=True)

    def __repr__(self):
        return f"Product('{self.name}', '{self.price}')"

class Image(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    image_file = db.Column(db.String(100), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)

    def __repr__(self):
        return f"Image('{self.image_file}')"

class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False, unique=True)
    products = db.relationship('Product', backref='category', lazy=True)

    def __repr__(self):
        return f"Category('{self.name}')"

class User(db.Model):
    __tablename__ = "user_table"
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(120), unique=False, nullable=True)
    last_name = db.Column(db.String(120), unique=False, nullable=True)
    address = db.Column(db.String(120), unique=False, nullable=True)
    profile_picture = db.Column(db.String(80), unique=False, nullable=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    
    def __repr__(self):
        return f'<User {self.username}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "address": self.address,
            "profile_picture": self.profile_picture
            
            # do not serialize the password, its a security breach
        }
    
# class User_Profiles(db.Model):
#     __tablename__ = "userprofiles_table"
#     profile_id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.ForeignKey('user_table.id'))
#     first_name = db.Column(db.String(120), unique=False, nullable=True)
#     last_name = db.Column(db.String(120), unique=False, nullable=True)
#     user_email = db.Column(db.String(120), unique=True, nullable=False)
#     user_address = db.Column(db.String(120), unique=False, nullable=True)
#     profile_picture = db.Column(db.String(80), unique=False, nullable=True)
#     user = db.relationship("User", back_populates="user_profile")

#     def __repr__(self):
#         return f'<User_Profiles {self.user_email}>'
    
#     def serialize(self):
#         return {
#             "first_name": self.first_name,
#             "last_name": self.last_name,
#             "user_email": self.user_email,
#             "user_address": self.user_address,
#             "profile_picture": self.profile_picture,
#         }
    
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

