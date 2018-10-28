from flask import Blueprint, jsonify

users_blueprint = Blueprint('users', __name__)

@users_blueprint.route('/users/test', methods=['GET'])
def henlo():
    return jsonify({
        'status': 'success',
        'message': 'henlo whal'
    })
