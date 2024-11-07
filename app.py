from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///applications.db'
db = SQLAlchemy(app)

class Application(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    statement = db.Column(db.Text, nullable=False)

@app.route('/apply', methods=['POST'])
def apply():
    data = request.get_json()
    new_application = Application(
        name=data['name'],
        phone=data['phone'],
        email=data['email'],
        statement=data['statement']
    )
    db.session.add(new_application)
    db.session.commit()
    return jsonify({'message': 'Application submitted successfully!'})

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
