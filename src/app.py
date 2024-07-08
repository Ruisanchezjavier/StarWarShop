"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from api.utils import APIException, generate_sitemap
from api.models import Category, Product, db
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from flask_jwt_extended import JWTManager

# from models import Person

ENV = "development" if os.getenv("FLASK_DEBUG") == "1" else "production"
static_file_dir = os.path.join(os.path.dirname(
    os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# Setup the Flask-JWT-Extended extension

app.config["JWT_SECRET_KEY"] = os.environ.get("FLASK_SECRET")  # Change this!
jwt = JWTManager(app) 


# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace(
        "postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type=True)
db.init_app(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object


@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints

@app.route('/add_category', methods=['POST'])
def add_category():
    data = request.json
    name = data['name']

    if Category.query.filter_by(name=name).first():
        return jsonify({'message': 'Category already exists'}), 400

    new_category = Category(name=name)
    db.session.add(new_category)
    db.session.commit()

    return jsonify({'message': 'Category added successfully'})

# Endpoint to get all categories
@app.route('/categories', methods=['GET'])
def get_categories():
    categories = Category.query.all()
    categories_list = [{'id': category.id, 'name': category.name} for category in categories]
    return jsonify(categories_list)

# Endpoint to add a product
@app.route('/add_product', methods=['POST'])
def add_product():
    data = request.form
    name = data['name']
    description = data['description']
    price = data['price']
    category_id = data['category_id']
    images = request.files.getlist('images')

    category = Category.query.get(category_id)
    if not category:
        return jsonify({'message': 'Category not found'}), 404

    new_product = Product(name=name, description=description, price=price, category_id=category_id)
    db.session.add(new_product)
    db.session.commit()

    for image in images:
        image_filename = image.filename
        image.save(os.path.join(app.config['UPLOAD_FOLDER'], image_filename))
        new_image = Image(image_file=image_filename, product_id=new_product.id)
        db.session.add(new_image)

    db.session.commit()

    return jsonify({'message': 'Product added successfully'})

# Endpoint to get all products
@app.route('/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    products_list = []
    for product in products:
        product_data = {
            'id': product.id,
            'name': product.name,
            'description': product.description,
            'price': product.price,
            'category': product.category.name,
            'images': [image.image_file for image in product.images]
        }
        products_list.append(product_data)
    return jsonify(products_list)


@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file


@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0  # avoid cache memory
    return response




# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
