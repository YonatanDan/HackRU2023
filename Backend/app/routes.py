from flask import Blueprint, jsonify

# create a blueprint for the hello_world route
hello_world = Blueprint('hello_world', __name__)

@hello_world.route('/')
def hello():
    return jsonify({'message': 'Hello, World!'})
