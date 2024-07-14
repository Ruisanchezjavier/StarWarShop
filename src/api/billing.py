from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///billing.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
CORS(app)

class PaymentMethod(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    card_type = db.Column(db.String(20), nullable=False)
    card_number = db.Column(db.String(20), nullable=False)
    expiry_date = db.Column(db.String(10), nullable=False)
    is_default = db.Column(db.Boolean, default=False)

class BillingHistory(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    transaction_id = db.Column(db.String(20), nullable=False)
    date = db.Column(db.String(20), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    status = db.Column(db.String(20), nullable=False)

db.create_all()

@app.route('/api/payment-methods', methods=['GET', 'POST'])
def payment_methods():
    if request.method == 'POST':
        data = request.json
        new_method = PaymentMethod(
            card_type=data.get('card_type'),
            card_number=data.get('card_number'),
            expiry_date=data.get('expiry_date'),
            is_default=data.get('is_default', False)
        )
        db.session.add(new_method)
        db.session.commit()
        return jsonify({"message": "Payment method added"}), 201
    
    methods = PaymentMethod.query.all()
    return jsonify([
        {
            "id": method.id,
            "card_type": method.card_type,
            "card_number": method.card_number,
            "expiry_date": method.expiry_date,
            "is_default": method.is_default
        } for method in methods
    ])

@app.route('/api/billing-history', methods=['GET'])
def billing_history():
    history = BillingHistory.query.all()
    return jsonify([
        {
            "transaction_id": record.transaction_id,
            "date": record.date,
            "amount": record.amount,
            "status": record.status
        } for record in history
    ])

if __name__ == '__main__':
    app.run(debug=True)
