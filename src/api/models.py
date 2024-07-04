from flask_sqlalchemy import SQLAlchemy

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